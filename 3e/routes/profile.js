const express = require('express');
const { User,Post, Payment } = require('../models');
const router  = express.Router();



router.get('/',async (req, res, next) => {
    try {
      const posts = await Payment.findAll({ 
      include: {
        model:User,
        attributes: ['email','nick'],
      },
      order: [['createdAt', 'DESC']],
    });
    res.render('profile', {
      title: '3e',
      payments: posts,
    });
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
  

module.exports = router;