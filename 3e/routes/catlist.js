const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Post, User, Hashtag } = require('../models');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  // res.locals.followerCount = req.user ? req.user.Followers.length : 0;
  // res.locals.followingCount = req.user ? req.user.Followings.length : 0;
  // res.locals.followerIdList = req.user ? req.user.Followings.map(f => f.id) : [];
  next();
});

// router.get('/profile', isLoggedIn, (req, res) => {
//   res.render('profile', { title: '내 정보 - 3e' });
// });

// router.get('/join', isNotLoggedIn, (req, res) => {
//   res.render('join', { title: '회원가입 - 3e' });
// });

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ['id', 'nick'],
      },
      order: [['createdAt', 'DESC']],
    });
    res.render('catlist', {
      title: '3e',
      twits: posts,
    });
  } catch (err) {
    console.error(err);
    next(err);
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

    return res.render('catlist', {
      title: `${query} | 3e`,
      twits: posts,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});
router.route('/:id').get(async(req,res)=>{
  try {
    
     await Post.destroy({where:{id:req.params.id}});
        res.redirect('/catlist');
  } catch (err) {
    console.error(err);
        next(err);
  }
});
module.exports = router;