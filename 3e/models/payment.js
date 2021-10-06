const Sequelize = require('sequelize');

module.exports = class Payment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      capname: {//제픔명
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      capnumber: {//제품넘버
        type: Sequelize.STRING(140),
        allowNull: true,
      },
      price: {//가격
        type: Sequelize.STRING(140),
        allowNull: true,
      },
      img: {//이미지
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      tag: {//제품태그
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      brand: {//브랜드
        type: Sequelize.STRING(200),
        allowNull: true,
        
      },
      
      quantity: {//수량
        type: Sequelize.STRING(200),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Payment',
      tableName: 'payments',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
   db.Payment.hasMany(db.Payment);
   db.Payment.belongsTo(db.Post);
   db.Payment.belongsTo(db.Cart);
   db.Payment.belongsTo(db.User);
   db.Payment.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
  }
};