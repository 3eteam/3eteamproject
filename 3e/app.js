const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const passport = require('passport');


dotenv.config();
const boardRouter = require('./routes/board');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const { sequelize } = require('./models');
const passportConfig = require('./passport');
const mainRouter = require('./routes/main');
const catlistRouter = require('./routes/catlist');
const makerRouter =require('./routes/maker');
const nikeRouter =require('./routes/nike');
const adidasRouter =require('./routes/adidas');
const carharttRouter =require('./routes/carhartt');
const championRouter =require('./routes/champion');
const neweraRouter =require('./routes/newera');
const searchRouter =require('./routes/search');
const capdetailRouter =require('./routes/capdetail');
const boardwriteRouter =require('./routes/boardwrite');
const paymentRouter =require('./routes/payment');
const covernatRouter = require('./routes/covernat');
const magazineRouter = require('./routes/magazine');
const alllistRouter = require('./routes/alllist');
const cartRouter = require('./routes/cart');
const profileRouter = require('./routes/profile');
const boarddetailRouter = require('./routes/boarddetail');
const changeinfoRouter = require('./routes/changeinfo');





const http = require("http")
const app = express();
const server = http.createServer(app);


const moment = require("moment");
require('moment-timezone')
moment.tz.setDefault("Asia/Seoul");
// exports.moment=moment;


const socketIO = require("socket.io");
const io = socketIO(server);

io.on("connection",(socket)=>{

  socket.on("chatting",(data)=>{
      const { name, msg } = data;
      io.emit("chatting", {
          name,
          msg,
          time: moment(new Date()).format("h:ss A")
      })
  });
})

passportConfig(); // 패스포트 설정
app.set('port', process.env.PORT || 6002);
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});
sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'uploads')));
app.use('/img', express.static(path.join(__dirname, 'profileimg')));
app.use('/img', express.static(path.join(__dirname, 'boarduploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(passport.initialize());
app.use(passport.session());

//라우터
app.use('/', mainRouter);

app.use('/auth', authRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/catlist',catlistRouter);
app.use('/board', boardRouter);
app.use('/boardwrite', boardwriteRouter);
app.use('/maker',makerRouter);
app.use('/nike',nikeRouter);
app.use('/adidas',adidasRouter);
app.use('/carhartt',carharttRouter);
app.use('/champion',championRouter);
app.use('/covernat',covernatRouter);
app.use('/search',searchRouter);
app.use('/capdetail',capdetailRouter);
app.use('/payment',paymentRouter);
app.use('/magazine',magazineRouter);
app.use('/newera',neweraRouter);
app.use('/alllist',alllistRouter);
app.use('/cart',cartRouter);
app.use('/profile',profileRouter);
app.use('/boarddetail',boarddetailRouter);
app.use('/changeinfo',changeinfoRouter);



app.use((req, res, next) => {
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});


server.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});

