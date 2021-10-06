const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Post, User, Hashtag, Payment } = require('../models');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;

  next();
});



router.get('/join', isNotLoggedIn, (req, res) => {
  res.render('join', { title: '회원가입 - 3e' });
});
router.get('/login', isNotLoggedIn, (req, res) => {
  res.render('login', { title: '회원가입 - 3e' });
});
router.get('/logout', isLoggedIn, (req, res) => {
  res.render('logout', { title: '회원가입 - 3e' });
});

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ['id', 'nick'],
      },
      order: [['createdAt', 'DESC']],
    });
    res.render('main', {
      title: '3e',
     });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;