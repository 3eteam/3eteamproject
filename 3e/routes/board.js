const express = require('express');
const { Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');
const router  = express.Router();


router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
//게시글 전체 데이터 가져와서 불러오기
router.get('/', async (req, res, next) => {
    try {
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

  //  // 본인 게시글 수정하는 부분
  // router.route('/:id/edit').get(isLoggedIn, async(req,res, next)=>{
  //   try {
  //      await Comment.update({
  //        where : {id : req.params.id}
  //     });
  //         res.redirect('/board');
  //   } catch (err) {
  //     console.error(err);
  //         next(err);
  //   }
  // });

  
 // 본인 게시글 삭제하는 부분
  router.route('/:id').get(isLoggedIn, async(req,res, next)=>{
    try {
       await Comment.destroy({
         where : {id : req.params.id}
      });
          res.redirect('/board');
    } catch (err) {
      console.error(err);
          next(err);
    }
  });
module.exports=router;