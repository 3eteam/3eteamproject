const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const User = require('../models/user');
const { ExclusionConstraintError } = require('sequelize/types');

const router = express.Router();

// 회원가입 라우터. async/await 사용.
router.post('/join', isNotLoggedIn, async(req, res, next)=>{
    const {email, nick, password} = req.body;
    try{
        // 같은 이메일을 쓰는 기존사용자 정보가 있는지 조회하고 중복되면 회원가입 페이지로 다시 보냄.
        const exUser = await User.findOne({where:{email}});
        if (exUser){
            return res.redirect('/join?error=exist');
        }
        // 같은 이메일 쓰는 기존 사용자가 없으면 bcrypt 모듈로 암호화하기(hash 메서드).
        const hash = await bcrypt.hash(password, 12);
        await User.Create({
            email,
            nick,
            //has 메서드
            password: hash,
        });
        return res.redirect('/');
    }catch(error){
        console.error(error);
        return next(error);
    }
});

//로그인 라우터
router.post('/login', isNotLoggedIn, (req, res, next)=>{
    //로그인 요청이 들어오면 passport.authenticate 미들웨어 시행
    //라우터 미들웨어 안에 있는 미들웨어를 넣은 이유 : 미들웨어에 사용자 정의 기능을 추가하고 싶어서.
    passport.authenticate('local', (authError, user, info)=>{
        // 위 콜백 함수의 매개변수인 authErr 값이 있다면 실패한 것.
        if(authError){
            console.error(authError);
            return next(authError);
        }
        //user가 아니라면 로그인 에러로 보내기
        if (!user){
            return res.redirect(`/?loginError=${info.message}`);
        }
        //두번째 매개변수 값이 있으면 성공한 것이고 req.login 메서드 호출.
        return req.login(user, (loginError)=>{
            if (loginError){
                console.log(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req, res, next);
});

//로그아웃 라우터
router.get('/logout', isLoggedIn, (req, res)=>{
    req.logout();  //<- req.user 객체 제거
    req.session.destroy(); //<-req.session 객체 내용 제거
    res.redirect('/'); // 다 지워으면 메인 페이지로 돌아가기
});
module.exports = router;