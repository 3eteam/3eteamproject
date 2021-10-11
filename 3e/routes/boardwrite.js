const express = require('express');
const router  = express.Router();
const { Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');
const fs = require('fs');
const path = require('path');
const multer=require('multer');



//boardwrite로 렌더링(작성하려면 loggedin 상태여야 함)
router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post('/', async (req, res, next) => {
    try {
      const identity = res.locals.user;
      console.log(req.user);
      const comment = await Comment.create({
        img:req.body.url,
        comment: req.body.comment,
        // 닉네임이나 이메일을 쓰고 싶으면 어떡하지
        UserId: identity.id,
      
      });
      res.redirect('/board');
    } catch (err) {
      console.error(err);
      next(err);
    }
  });
// 이미지 넣는 법
router.post('/img', isLoggedIn, upload.single('img'), (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });
});
// 업로드
const upload2 = multer();
router.post('/', isLoggedIn, upload2.none(), async (req, res, next) => {
  try {
    console.log(req.user);
    const post = await Comment.create({
      
      comment: req.body.comment,
      img: req.body.url,  
      // id: req.user.id
     

    });
    const hashtags = req.body.comment.match(/#[^\s#]*/g);
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map(tag => {
          return Hashtag.findOrCreate({
            where: { title: tag.slice(1).toLowerCase() },
          })
        }),
      );
      await post.addHashtags(result.map(r => r[0]));
    }
    res.redirect('/');
  } catch (error) {
    console.error(error);
    next(error);
  }
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
  res.render('boardwrite', {
    title: '3e',
    comments: posts,
  });
  } catch (error) {
    console.error(error);
    next(error);
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
        console.error(err);v
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