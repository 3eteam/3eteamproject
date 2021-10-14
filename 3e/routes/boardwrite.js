const express = require('express');
const router  = express.Router();
const { Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');
const fs = require('fs');
const path = require('path');
const multer=require('multer');

router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

try {
  fs.readdirSync('boarduploads');
} catch (error) {
  console.error('boarduploads 폴더가 없어 boarduploads 폴더를 생성합니다.');
  fs.mkdirSync('boarduploads');
}

// boardwrite 라우터
router.get('/', isLoggedIn, async (req, res, next) => {
  try {
    const posts = await Comment.findAll({ 
    include: {
      model: User,
      attributes: ['id', 'email'],
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



// 이미지 업로드 시 파일이름에 시간을 더해 유니크하게 만들기
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'boarduploads/');
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// 게시글값 업로드
router.post('/', async (req, res, next) => {
    try {
      const identity = res.locals.user;
      console.log(req.user);
      const comment = await Comment.create({
        // 닉네임을 쓰고 싶으면 어떡하지
        title: req.body.title,
        comment: req.body.comment,
        img:req.body.url,
        viewcount:req.body.viewcount,
        UserId: identity.id,
      
      });
      res.redirect('/board');
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

//img 저장
router.post('/img', isLoggedIn, upload.single('img'), (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });
});


const upload2 = multer();
router.post('/', isLoggedIn, upload2.none(), async (req, res, next) => {
  try {
    const identity = res.locals.user;
    console.log(req.user);
    const post = await Comment.create({
      
      title: req.body.title,
      comment: req.body.comment,
      viewcount: req.body.viewcount,
      img: req.body.url,  
      UserId: identity.id,
      createdAt: req.body.createdAt

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


  
module.exports=router;