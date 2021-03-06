const express = require('express');
const { Comment, User } = require('../models');
const router  = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// 누른 그 해당글을 불러와야 함
router.get('/:id', async (req, res, next) => {
    try {
      const posts = await Comment.findOne({
        //해당 게시글을 id값(unique)을 통해 불러오는 방법
        include: {
          model: User,
          attributes:['id','nick'],
        },
        where:{id : req.params.id},
    });
    //렌더링 되기 전 조회수 1 추가
    const update = await Comment.update(
      {
      viewcount : ++posts.viewcount,
    },
    {where:{id : req.params.id}}
    )
      res.render('boarddetail', {
      title: '게시글 상세페이지 | 3e',
      comments: posts,
    });
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
  
module.exports=router;