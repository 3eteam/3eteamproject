const express = require('express');
const { Comment, User } = require('../models');
const router  = express.Router();
const { isLoggedIn } = require('./middlewares');



// router.get('/',(req,res)=>{
//     res.render('board');
// });
router.get('/', async (req, res, next) => {
    try {
      const posts = await Comment.findAll({ 
      include: {
        model: User,
        attributes: ['id'],
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