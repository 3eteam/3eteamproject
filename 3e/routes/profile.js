const express = require('express');
const { User,Post, Payment } = require('../models');
const router  = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;

  next();
});

router.get('/',async (req, res, next) => {
  const user =res.locals.user;
    try {
      const posts = await Payment.findAll({ 
      include: {
        model:User,
        attributes: ['email','nick',"img"],
      },
      
      order: [['createdAt', 'DESC']],
    });
    const useremail = await User.findOne({ 
      where:{id:user.id},
      
  
    });
    const userimg=user.img;
  const useremail1 = user.email;
  const usernick = user.nick;
    res.render('profile', {
      title: '3e',
      payments: posts,
      useremail1,
      
      userimg,
      

    });
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
  router.get('/',async (req, res, next) => {
    try {
      const posts = await Cart.findOne({ 
     
      
    
    });
    res.render('profile', {
      title: '3e',
      pay: posts,
    });
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

module.exports = router;