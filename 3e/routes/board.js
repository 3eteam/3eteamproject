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

// 본인 게시글 수정
router.route("/:id/boardedit")
.get(async (req, res, next) => {
    try {
        const comment = await Comment.findOne({
          include: {
            model: User,
            attributes:['id','nick'],
          },
          where:{id : req.params.id},
        });
        res.render("boardedit", { comment });
    }catch (err){
        console.error(err);
        next(err);
    }
})
.post(async (req, res, next) => {
    try {
        const comment = await Comment.update(
            {
                title: req.body.title,
                comment: req.body.comment,
                img: req.body.url,
            },
            {
                where: { id: req.params.id },
            }
        );
        res.redirect("/boarddetail/" + req.params.id);
    } catch (err) {
        console.error(err);
        next(err);
    }
  });
  

 // 본인 게시글 삭제
  router.route('/:id/delete').get(isLoggedIn, async(req,res, next)=>{
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