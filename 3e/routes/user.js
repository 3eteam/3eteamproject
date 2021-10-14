const express = require('express');

const { isLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

router.post('/:id/follow', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (user) {
      await user.addFollowing(parseInt(req.params.id, 10));
      res.send('success');
    } else {
      res.status(404).send('no user');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.get('/',async (req, res, next) => {
  try {
    const posts = await Cart.findAll({ 
    include: {
      model: User,
      attributes: ['id'],
    },
    order: [['createdAt', 'DESC']],
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

module.exports = router;