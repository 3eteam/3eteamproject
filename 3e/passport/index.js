const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
    // sj :BADFIELDERROR 해결시도
    // done(null, User.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({
      where: { id },
      include: [{
        model: User,
        attributes: ['id', 'nick'],
        as: 'Followers',
      }, {
        model: User,
        attributes: ['id', 'nick'],
        as: 'Followings',
      },
          // //sj 게시글작성 추가분
          // {
          //   model: User,
          //   attributes: ['id', 'nick'],
          //   as: 'Comment',
          // }
        ],
    })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local();
  kakao();
};