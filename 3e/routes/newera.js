const express = require('express');

const router  = express.Router();

router.get('/',(req,res)=>{
    res.render('newera');
});
module.exports=router;