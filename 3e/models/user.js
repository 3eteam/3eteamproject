const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
        // isEmail:true,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      nick: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING(50),
        allowNull: true,
        // isNumeric:true,
      },
      birth: {
        type: Sequelize.STRING(20),
        allowNull: true,
        // isDate:true,
      },
      address: {
        type: Sequelize.STRING(300),
        allowNull: true,
      },
      // //불리언값은 둘 중 하나로 넣어야 될거 같음 안 그럼 오류남
      // sex: {  
      //   type: Sequelize.BOOLEAN,
      //   allowNull: false,
      // },
      provider: {
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: 'local',
      },
      snsId: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Cart);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.User, {
      foreignKey: 'followingId',
      as: 'Followers',
      through: 'Follow',
    });
    db.User.belongsToMany(db.User, {
      foreignKey: 'followerId',
      as: 'Followings',
      through: 'Follow',
    });
  }
};