const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');
const Post = require('./post');
const Hashtag = require('./hashtag');
const Cart = require('./cart');
const Payment = require('./payment');
const Comment = require('./comment');

const db = {};
const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config, 
  config.MYSQL_URL,
  config.MYSQL_USER,
  config.MYSQL_PASS,
  {
    host: process.env.MYSQL_URL,
    dialect: "mysql",
    timezone: "+09:00", // DB에 저장할 때 시간 설정
    dialectOptions: {
    timezone: "+09:00", // DB에서 가져올 때 시간 설정
    },
}
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Hashtag = Hashtag;
db.Cart=Cart;
db.Payment=Payment;
db.Comment=Comment;

Comment.init(sequelize);
User.init(sequelize);
Post.init(sequelize);
Hashtag.init(sequelize);
Cart.init(sequelize);
Payment.init(sequelize);

Comment.associate(db);
User.associate(db);
Post.associate(db);
Hashtag.associate(db);
Cart.associate(db);
Payment.associate(db);

module.exports = db;