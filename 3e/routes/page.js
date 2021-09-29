const express = require('express');

const router = express.Router();

router.use((req,res,next)=>{
 res.locals.user=null;
 res.locals.addlist=[];
    
    next();

});


router.get('/addlist,',(req,res)=>{
    res.render('addlist',{title:'장바구니'});
    console.log(2);
});

router.get('/',(req,res,next)=>{ 
  
    res.render('main',{
        title:'3e'
    })
});
module.exports=router;
