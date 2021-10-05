const express = require('express');

const router  = express.Router();
const { Post, User, Hashtag } = require('../models');
// router.get('/',(req,res)=>{
//     res.render('nike');
// });
// router.use((req, res, next) => {
//   res.locals.user = req.user;
  
//   next();
// });




router.get('/',  async (req, res, next) => {
  try {
    const posts = await Post.findAll({ 
    // include: {
    //   model: Post,
    //   attributes: ['brand'],
    // },
  
    order: [['createdAt', 'DESC']],
  });
  res.render('nike', {
    title: '3e',
    caps: posts,
  });
  } catch (error) {
    console.error(error);
    next(error);
  }
});




// router.get('/', async (req, res, next) => {
//   try {
//     const adidas = await Post.findAll({
//       include: {
//         model: Post,
//         attributes: ['brand'],
//       },
    
//       order: [['createdAt', 'DESC']],
//     });
//     res.render('nike', {
//       title: '3e',
//       twits: posts,
//     });
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });

// router.get('/hashtag', async (req, res, next) => {
//   const query = req.query.hashtag;
//   if (!query) {
//     return res.redirect('/');
//   }
//   try {
//     const hashtag = await Hashtag.findOne({ where: { title: query } });
//     let posts = [];
//     if (hashtag) {
//       posts = await hashtag.getPosts({ include: [{ model: User }] });
//     }

//     return res.render('nike', {
//       title: `${query} | 3e`,
//       twits: posts,
//     });
//   } catch (error) {
//     console.error(error);
//     return next(error);
//   }
// });

module.exports = router;