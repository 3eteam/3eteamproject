const express = require('express');
const { User } = require('../models');
const { isLoggedIn } = require('./middlewares');
const router  = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  console.log(res.locals.user);
  next();
});


// 본인 회원정보 수정
router.route("/")
.get(isLoggedIn, async (req, res, next) => {
  
    try {
        const user = await User.findOne({
          where: { id: res.locals.user.id },
        });
        res.render("changeinfo", { user });
    }catch (err){
        console.error(err);
        next(err);
    }
})
.post(async (req, res, next) => {
    try {
        const user = await User.update(
            {
              email:req.body.email,
              nick:req.body.nick,
              phone:req.body.phone,
              birth:req.body.birth,
              address:req.body.address,
              UserId:res.locals.user.id,
            },
            {
                where: { id: res.locals.user.id },
            }
        );
        res.redirect("/");
    } catch (err) {
        console.error(err);
        next(err);
    }
  });
  

module.exports=router;