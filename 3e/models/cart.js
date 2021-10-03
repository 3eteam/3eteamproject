const Sequelize = require('sequelize');

module.exports = class Cart extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      capname: {//제픔명
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      capnumber: {//제품넘버
        type: Sequelize.STRING(140),
        allowNull: false,
      },
      price: {//가격
        type: Sequelize.STRING(140),
        allowNull: false,
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
      modelName: 'Cart',
      tableName: 'carts',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
   db.Post.hasMany(db.Post);
    db.Post.belongsTo(db.User);
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
  }
};