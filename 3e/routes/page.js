const express = require('express');
<<<<<<< HEAD
const {Post} = require('../models');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  
  next();
});


router.get('/', async (req, res, next) => {
  try {

    res.render('main', {
      title: '3e',
     //twits: posts,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});


module.exports = router;
=======
const {isLoggedIn, isNotLoggedIN} = require('./middlewares');

const router = express.Router();

router.use((req,res,next)=>{
 res.locals.user = req.user;
 res.locals.followerCount = 0;
 res.locals.followingCount = 0;
 res.locals.followerIdList = [];
//  res.locals.user=null;
//  res.locals.addlist=[];
    
    next();

});
router.get('/profile', isLoggedIn, (req, res)=>{
    res.render('profile', {title:'내 정보 - NodeBird'});
});
router.get('/join', isNotLoggedIn, (req, res)=>{
    res.render('join', {title:'회원가입 - NodeBird'});
});



// router.get('/addlist,',(req,res)=>{
//     res.render('addlist',{title:'장바구니'});
// });

// router.get('/',(req,res,next)=>{ 
  
//     res.render('main',{
//         title:'3e'
//     })
// });
// module.exports=router;
>>>>>>> e860cda280e1664406597a45a49006a9b8477457
