const express = require('express');
const {Post} = require('../models');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  
  next();
});


router.get('/', async (req, res, next) => {
  try {

    res.render('main', {
      title: '3e',
     //twits: posts,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});


module.exports = router;