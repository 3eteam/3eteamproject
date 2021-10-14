const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      title: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      comment: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      img: {//이미지
        type: Sequelize.STRING(300),
        allowNull: true,
      },
      viewcount: {
        type: Sequelize.MEDIUMINT(8),
        allowNull: false,
        defaultValue: 0,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Comment',
      tableName: 'comments',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Comment.belongsTo(db.User);
  }
};