
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Post, Hashtag ,Cart} = require('../models');
const { isLoggedIn } = require('./middlewares');



const router  = express.Router();


router.use((req, res, next) => {
    res.locals.user = req.user;
    
    next();
  });

router.get('/', async (req, res, next) => {
    try {
      const posts = await Post.findAll({
        include: {
          model: Post,
          attributes: ['capname', 'capnumber'],
        },
        order: [['createdAt', 'DESC']],
      });
      res.render('cart', {
        title: '3e',
        cart: posts,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });


  const upload2 = multer();
router.post('/', upload2.none(), async (req, res, next) => {
  try {
    console.log(req.user);
    const cart = await Cart.create({
      
      
      content: req.body.content,
      img: req.body.url,
      capnumber:req.body.capnumber,
      brand: req.body.brand,
      tag: req.body.tag,
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
router.get('/hashtag', async (req, res, next) => {
  const query = req.query.hashtag;
  if (!query) {
    return res.redirect('/');
  }
  try {
    const hashtag = await Hashtag.findOne({ where: { title: query } });
    let posts = [];
    if (hashtag) {
      posts = await hashtag.getPosts({ include: [{ model: User }] });
    }

    return res.render('cart', {
      title: `${query} | 3e`,
      caps: posts,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});
module.exports=router;