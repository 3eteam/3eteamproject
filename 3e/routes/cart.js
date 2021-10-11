
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Post, Hashtag ,Cart,User} = require('../models');
const { isLoggedIn } = require('./middlewares');



const router  = express.Router();


router.use((req, res, next) => {
    res.locals.user = req.user;
    
    next();
  });

  router.get('/',isLoggedIn,async (req, res, next) => {
    try {
      const user =res.locals.user;
      console.log(req.user.id);
      // const cart2 = await Cart.findAll({});
      const posts = await User.findAll({ 
      include: {
        model: Cart,
        
        attributes:['id','price','capname','img'],
        where:{UserId:user.id},
      },
    
    });
    
    res.render('cart', {
      title: '3e',
      cart: posts,
      
    });
    } catch (error) {
      console.error(error);
      next(error);
    }
  });


  const upload2 = multer();
router.post('/', upload2.none(), async (req, res, next) => {
  try {
    const userid= res.locals.user;
    console.log(req.user);
    const cart = await Cart.create({
      
      
      content: req.body.content,
      img: req.body.img,
      capnumber:req.body.capnumber,
      brand: req.body.brand,
      capname:req.body.capname,
      price:req.body.price,
      quantity:req.body.quantity,
       UserId:userid.id,
    



    });
  
    
    res.redirect('/');
  } catch (error) {
    console.error(error);
    next(error);
  }
});
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

//     return res.render('cart', {
//       title: `${query} | 3e`,
//       cart: posts,
//     });
//   } catch (error) {
//     console.error(error);
//     return next(error);
//   }
// });
router.route('/:id').get(async(req,res)=>{
  try {
    
     await Cart.destroy({where:{id:req.params.id}});
        res.redirect('/cart');
  } catch (err) {
    console.error(err);
        next(err);
  }
});
    // .patch(isLoggedIn, async (req, res, next) => {
    //   try {
    //     const result = await Cart.update({
    //       comment: req.body.comment,
    //     }, {
    //       where: { id: req.params.id },
    //     });
    //     res.json(result);
    //   } catch (err) {
    //     console.error(err);v
    //     next(err);
    //   }
    // })
    // .delete(isLoggedIn,async (req, res, next) => {
    //   try {
    //     const result = await Cart.destroy({where:{id:req.params.id}});
    //     res.json(result);
    //   } catch (err) {
    //     console.error(err);
    //     next(err);
    //   }
    // });

module.exports=router;





