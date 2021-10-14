const express = require('express');
const { Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');
const router  = express.Router();


router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

router
    .route("/:id/edit")
    .get(async (req, res, next) => {
        try {
            const notice = await Comment.findAll({
                where: { id: req.params.id },
            });

            res.render("boardwrite", { comment });
        }catch(err){
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
                },
                {
                    where: { id: req.params.id },
                }
            );
            res.redirect("/board" + req.params.id);
        } catch (error) {
            console.error(err);
            next(err);
        }
    });

// //게시글 전체 데이터 가져와서 불러오기
// router.get('/', async (req, res, next) => {
//     try {
//       const posts = await Comment.findAll({ 
//       include: {
//         model: User,
//         attributes: ['id','nick'],
//       },
//       order: [['id', 'DESC']],
//     });
//     res.render('board', {
//       title: '3e',
//       comments: posts,
//     });

//     } catch (error) {
//       console.error(error);
//       next(error);
//     }
//   });


//   // 본인 게시글 수정, 삭제하는 부분
//   router.route('/:id')
//     .patch(isLoggedIn, async (req, res, next) => {
//       try {
//         const result = await Comment.update({
//           comment: req.body.comment,
//         }, {
//           where: { id: req.params.id },
//         });
//         res.json(result);
//       } catch (err) {
//         console.error(err);
//         next(err);
//       }
//     })
//     .delete(isLoggedIn, async (req, res, next) => {
//       try {
//         const result = await Comment.destroy({ where: { id: req.params.id } });
//         res.json(result);
//       } catch (err) {
//         console.error(err);
//         next(err);
//       }
//     });

module.exports=router;