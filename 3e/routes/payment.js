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

  // router.get('/',async (req, res, next) => {
  //   try {
  //     const posts = await Payment.findAll({ 
  //     // include: {
  //     //   model: User,
  //     //   attributes: ['id'],
  //     // },
  //     order: [['createdAt', 'DESC']],
  //   });
  //   res.render('profile', {
  //     title: '3e',
  //     payments: posts,
  //   });
  //   } catch (error) {
  //     console.error(error);
  //     next(error);
  //   }
  // });
 
  const upload2 = multer();
router.post('/', upload2.none(), async (req, res, next) => {
  try {
    console.log(req.user);
    const payment = await Payment.create({
      
      
      content: req.body.content,
    
      capnumber:req.body.capnumber,
      brand: req.body.brand,
     
      capname:req.body.capname,
      price:req.body.price,
      quantity:req.body.quantity,



    });
  
    
    res.redirect('/');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports=router;




