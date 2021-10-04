const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');
const Post = require('./post');
const Hashtag = require('./hashtag');
const Cart = require('./cart');
// sj 게시글작성 추가분
const Comment = require('./comment');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Hashtag = Hashtag;
db.Cart=Cart;
//sj 게시글작성 추가분
db.Comment = Comment;

User.init(sequelize);
Post.init(sequelize);
Hashtag.init(sequelize);
Cart.init(sequelize);
//sj 게시글작성 추가분
Comment.init(sequelize);

User.associate(db);
Post.associate(db);
Hashtag.associate(db);
Cart.associate(db);
//sj 게시글작성 추가분
Comment.associate(db);

module.exports = db;