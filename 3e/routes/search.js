const express = require('express');
const { Post, Hashtag ,Cart,User} = require('../models');
const router  = express.Router();

// router.get('/', async (req, res, next) => {
//   try {
//     const posts = await Post.findAll({
//       // include: {
//       //   model: User,
//       //   attributes: ['id', 'nick'],
//       // },
//       order: [['createdAt', 'DESC']],
//     });
//     res.render('search', {
//       title: '3e',
//       twitss: posts,
//     });
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });
router.get('/hashtag', async (req, res, next) => {
  const query = req.query.hashtag;
  if (!query) {
    return res.redirect('/');
  }
  try {
    const hashtag = await Post.findAll();
    // let posts = [];
    if (hashtag) {
      // posts = await hashtag.getPosts();
    }

    return res.render('search', {
      title: `${query}`,
      twits: hashtag,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});
// { where: { tag: query } }
module.exports=router;