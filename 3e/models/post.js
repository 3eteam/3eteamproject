const Sequelize = require('sequelize');

module.exports=class Post extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            catId:{
                type:Sequelize.STRING(40),
                allowNull:true,
                unique:true,
            },
            content:{
                type:Sequelize.STRING(200),
                allowNull:false,

            }

        },{
            sequelize,
            timestamps:true,
            underscored:false,
            modelName:'Post',
            tableName:'catPost',
            charset:'utf8',
            clooate:'utf8_general_ci',
        });
    }
    static associate(db){
        //db.Post.belongsTo(db.Post);
        //db.Post.belongsToMany(db.Hashtag,{through:'PostHashtag'})
    };
}