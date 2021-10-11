const express = require('express');
const { Comment, User } = require('../models');
const router  = express.Router();
const { isLoggedIn } = require('./middlewares');

router.use((req, res, next) => {
  res.locals.user = req.user;

  next();
});

// router.get('/',(req,res)=>{
//     res.render('board');
// });
router.get('/', async (req, res, next) => {
    try {
      // const findId = res.locals.user;
      // console.log('///////////////////////////////////////')
      // console.log(findId.email);
      // console.log('//////////////////////////////////')
      const posts = await Comment.findAll({ 
      // include: {
      //   model: Comment,
      //   attributes: ['id'],
      // },
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