const express = require('express');
const router  = express.Router();
const { Comment, User } = require('../models');

//boardwrite로 렌더링
router.get('/',(req,res)=>{
    res.render('boardwrite');
});



router.get('/',async (req, res, next) => {
  try {
    const posts = await Comment.findAll({ 
    include: {
      model: User,
      attributes: ['id'],
    },
    order: [['createdAt', 'DESC']],
  });
  res.render('boardwrite', {
    title: '3e',
    comment: posts,
  });
  } catch (error) {
    console.error(error);
    next(error);
  }
});




router.post('/', async (req, res, next) => {
    try {
      console.log(req.user);
      const comment = await Comment.create({
        // id: req.body.id,
        comment: req.body.comment,
      });
      res.status(201).json(comment);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });
  
  router.route('/:id')
    .patch(async (req, res, next) => {
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
    .delete(async (req, res, next) => {
      try {
        const result = await Comment.destroy({ where: { id: req.params.id } });
        res.json(result);
      } catch (err) {
        console.error(err);
        next(err);
      }
    });
  
module.exports=router;