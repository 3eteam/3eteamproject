const express = require('express');
const multer = require('multer');
const path = require('path');
// const fs = require('fs');

const { Post, Hashtag ,Cart,User,Payment} = require('../models');
const { isLoggedIn } = require('./middlewares');



const router  = express.Router();


router.use((req, res, next) => {
    res.locals.user = req.user;
    
    next();
  });

  router.get('/',async (req, res, next) => {
    try {
      const posts = await Cart.findAll({ 
      include: {
        model: User,
        attributes: ['id'],
      },
      order: [['createdAt', 'DESC']],
    });
    res.render('payment', {
      title: '3e',
      cart: posts,
    });
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
 
  const upload2 = multer();
router.post('/', upload2.none(), async (req, res, next) => {
  try {

    const userid= res.locals.user;
    console.log(req.user);
    const payment = await Payment.create({
      
      
      content: req.body.content,
    
      capnumber:req.body.capnumber,
      brand: req.body.brand,
     
      capname:req.body.capname,
      price:req.body.price,
      quantity:req.body.quantity,
      UserId:userid.id,
    



    });
  
    
    res.redirect('/cart');
  } catch (error) {
    console.error(error);
    next(error);
  }
});
// router.get('/hashtag', async (req, res, next) => {
//   const query = req.query.hashtag;
//   if (!query) {
//     return res.redirect('/');
//   }
//   try {
//     const hashtag = await Hashtag.findOne({ where: { title: query } });
//     let posts = [];
//     if (hashtag) {
//       posts = await hashtag.getPosts({ include: [{ model: User }] });
//     }

//     return res.render('cart', {
//       title: `${query} | 3e`,
//       cart: posts,
//     });
//   } catch (error) {
//     console.error(error);
//     return next(error);
//   }
// });
module.exports=router;




