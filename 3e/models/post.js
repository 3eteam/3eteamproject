const Sequelize = require('sequelize');

module.exports=class Post extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            catId:{
                type:Sequelize.STRING(40),
                allowNull:true,
               
            },
            content:{
                type:Sequelize.STRING(200),
                allowNull:false,

            },
            img:{
                type:Sequelize.STRING(200),
                allowNull:true,
            }

        },{
            sequelize,
            timestamps:true,
            underscored:false,
            modelName:'Post',
            tableName:'catPost',
            paranoid:'false',
            charset:'utf8mb4',
            clooate:'utf8mb4_general_ci',
        });
    }
    static associate(db){
        db.Post.belongsTo(db.Post);
    
    };
}