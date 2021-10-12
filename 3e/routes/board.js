const express = require('express');
const { Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');
const router  = express.Router();
const fs = require('fs');
const path = require('path');
const multer=require('multer');


router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

router.get('/', async (req, res, next) => {
    try {
      const identity = res.locals.user;
      const posts = await Comment.findAll({ 
      include: {
        model: User,
        attributes: ['id','nick'],
      },
      order: [['id', 'DESC']],
    });
    res.render('board', {
      title: '3e',
      comments: posts,
    });

    } catch (error) {
      console.error(error);
      next(error);
    }
  });

module.exports=router;