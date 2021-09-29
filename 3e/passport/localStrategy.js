const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');

//로그인 전략
//
module.exports=()=>{
    //LocalStrategy의 첫번째 인수로 주어진 객체는 전략에 관한 설정을 하는 곳.
    //usernameFiled랑 passwordFiled에 일치하는 로그인 라우터의 req.body 속성명을 적으면 된다.
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    }, async(email, password, done)=>{
        // aync로 설정한 전략 수행. LocalStrategy의 두번째 인수로 들어가는 것.
        // 위에서 설정한 email과 password가 async함수의 첫번째 두번째 매개변수가 되고 세번째 done은 passport.authenticate의 콜백함수.
        try{
            const exUser = await User.findOne({where:{email}});
            if(exUser){
                const result = await bcrypt.compare(password, exUser.password);
            if (result){
                done(null, exUser);
            }else{
                done(null, false, {message: '비밀번호가 일치하지 않습니다.'});
            }
            }else{
                done(null, false, {message: '가입되지 않은 회원입니다..'});
        }
        }catch(error){
            console.error(error);
            done(error);
        }
    }));
};