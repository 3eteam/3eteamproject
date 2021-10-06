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
  config.database, config.username, config.password, config,
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