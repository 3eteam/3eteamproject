const express = require('express');

const router  = express.Router();
const { Post, User, Hashtag } = require('../models');



router.get('/',  async (req, res, next) => {
  try {
    const posts = await Post.findAll({ 
    // include: {
    //   model: Post,
    //   attributes: ['brand'],
    // },
  
    order: [['createdAt', 'DESC']],
  });
  res.render('nike', {
    title: '3e',
    caps: posts,
  });
  } catch (error) {
    console.error(error);
    next(error);
  }
});






module.exports = router;