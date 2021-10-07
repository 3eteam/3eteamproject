const express = require('express');
const router  = express.Router();
const { Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');


//boardwrite로 렌더링(작성하려면 loggedin 상태여야 함)
router.get('/', isLoggedIn, (req,res)=>{
    res.render('boardwrite');
});



router.get('/', isLoggedIn, async (req, res, next) => {
  try {
    const posts = await Comment.findAll({ 
    include: {
      model: User,
      attributes: ['id'],
    },
    order: [['createdAt', 'DESC']],
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




router.post('/', isLoggedIn, async (req, res, next) => {
    try {
      console.log(req.user);
      const comment = await Comment.create({
        // 닉네임을 쓰고 싶으면 어떡하지
        // nick: req.body.nick,
        comment: req.body.comment,
        created_at:req.body.created_at,
      });
      res.redirect('/board');
    } catch (err) {
      console.error(err);
      next(err);
    }
  });
  
  router.route('/:id')
    .patch(isLoggedIn, async (req, res, next) => {
      try {
        const result = await Comment.update({
          comment: req.body.comment,
        }, {
          where: { id: req.params.id },
        });
        res.json(result);
      } catch (err) {
        console.error(err);
        next(err);
      }
    })
    .delete(isLoggedIn, async (req, res, next) => {
      try {
        const result = await Comment.destroy({ where: { id: req.params.id } });
        res.json(result);
      } catch (err) {
        console.error(err);
        next(err);
      }
    });
  
module.exports=router;