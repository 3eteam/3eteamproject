const express = require('express');
const { Post, Hashtag ,Cart,User} = require('../models');
const router  = express.Router();


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

    return res.render('search', {
      title: `${query} | 3e`,
      cart: posts,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports=router;