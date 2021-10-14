
const express = require('express');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Post, User,Cart, Hashtag } = require('../models');

const router  = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    
    next();
  });
  
router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile', { title: '내 정보 - 3e' });
});

router.get('/join', isNotLoggedIn, (req, res) => {
  res.render('join', { title: '회원가입 - 3e' });
});


router.get('/',async (req, res, next) => {
  try {
    const user =res.locals.user;
    
    const posts = await Post.findAll({ 
    include: {
      model: Cart,
      
      attributes:['id','price','capname','img'],
    
    },
    
  
  });
  
  const useremail = await User.findOne({ 
    where:{id:user.id},
    

  });
  const carts = await Cart.findAll({ 
    
    
 
  });
  const userimg=user.img;
  const useremail1 = user.email;
  const usernick = user.nick;
  
  res.render('alllist', {
    title: '3e',
    cart: posts,
     carted:carts,
    useremail,
    userimg,
  
    
  });
  } catch (error) {
    console.error(error);
    next(error);
  }
}); 


router.route('/:id').get(async(req,res)=>{
  try {
    
     await Cart.destroy({where:{id:req.params.id}});
        res.redirect('/alllist');
  } catch (err) {
    console.error(err);
        next(err);
  }
});
  module.exports = router;
