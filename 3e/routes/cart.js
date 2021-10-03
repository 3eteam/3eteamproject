const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const router  = express.Router();
router.use((req, res, next) => {
    res.locals.user = req.user;
    
    next();
  });
  
router.get('/',(req,res)=>{
    res.render('cart');
});

  router.get('/', async (req, res, next) => {
    try {
      const posts = await Post.findAll({
        include: {
          model: User,
          attributes: ['id', 'nick'],
        },
        order: [['createdAt', 'DESC']],
      });
      res.render('catlist', {
        title: '3e',
        twits: posts,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });
module.exports=router;