const express = require('express');

const router  = express.Router();

router.get('/',(req,res)=>{
    res.render('magazine');
});
module.exports=router;