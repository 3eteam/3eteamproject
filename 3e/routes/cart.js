const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const multer = require('multer');
const router  = express.Router();
router.use((req, res, next) => {
    res.locals.user = req.user;
    
    next();
  });
const upload2 = multer();
router.post('/cart', isLoggedIn, upload2.none(), async (req, res, next) => {
  try {
    console.log(req.user);
    const post = await Cart.create({
      
      content: req.body.content,
      img: req.body.url,
      capnumber:req.body.capnumber,
      brand: req.body.brand,
      capname:req.body.capname,
      price:req.body.price,
      quantity:req.body.quantity,



    });
    const hashtags = req.body.content.match(/#[^\s#]*/g);
    
    res.redirect('/');
  } catch (error) {
    console.error(error);
    next(error);
  }
});  
// router.get('/',(req,res)=>{
//     res.render('cart');
// });

router.get('/', async (req, res, next) => {
    try {
      const posts = await Cart.findAll({
        include: {
          model: Cart,
          attributes: ['capname', 'capnumber'],
        },
        order: [['createdAt', 'DESC']],
      });
      res.render('cart', {
        title: '3e',
        cart: posts,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });


  
module.exports=router;