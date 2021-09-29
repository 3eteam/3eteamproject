const Sequelize = require('sequelize');

module.exports=class List extends Sequelize.Model{
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
            modelName:'List',
            tableName:'catlist',
            charset:'utf8',
            clooate:'utf8_general_ci',
        });
    }
    static associations(db);
}