
const express = require('express');
const multer = require('multer');


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
  
    
    res.redirect('/nike');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.route('/:id').get(async(req,res)=>{
  try {
    
     await Cart.destroy({where:{id:req.params.id}});
        res.redirect('/cart');
  } catch (err) {
    console.error(err);
        next(err);
  }
});

  
module.exports=router;





