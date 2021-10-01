const express = require('express');

const router  = express.Router();

router.get('/',(req,res)=>{
    res.render('boardwrite');
});
module.exports=router;