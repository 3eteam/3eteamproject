const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      content: {//제품설명
        type: Sequelize.STRING(140),
        allowNull: false,
      },
      idnumber: {//제품넘버
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
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Post',
      tableName: 'posts',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Post.belongsTo(db.User);
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
  }
};