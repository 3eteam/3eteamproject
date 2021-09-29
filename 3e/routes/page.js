const express = require('express');
const {Post,Hashtag}=require('../models');
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
        title:'3e',
       
    });
});


router.get('/hashtag',async(req,res,next)=>{
    const query =req.query.hashtag;
    if(!query){
        return res.redirect('/');
    }
    try{
        const hashtag = await Hashtag.findOne({where:{title:query}});
        let posts = [];
        if(hashtag){
            posts =await hashtag.getPosts({include:[{model:User}]});
        }
        return res.render('main',{
            title:`${query} | 3e `,
            twits:posts,
        });
    }catch(error){
        console.error(error);
        return next(error);
    }
})

module.exports=router;
