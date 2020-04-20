import rp from 'request-promise';
var Sequelize = require('sequelize');
var db = new Sequelize('horizontal', 'mysql', 'mysql', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

});


const UserModel = db.define('users', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, field: "author_id" },
  name: { type: Sequelize.STRING, field: "first_name" },
  last_lame: { type: Sequelize.STRING, field: "last_name" },
  email: { type: Sequelize.STRING, field: "last_name" },
  dni: { type: Sequelize.STRING, field: "last_name" },
  telefono : { type: Sequelize.STRING, field: "last_name" },
  email_verified_at: { type: Sequelize.STRING, field: "last_name" },
  password: { type: Sequelize.STRING, field: "last_name" },
  active: { type: Sequelize.STRING, field: "last_name" },
  tipo_usuario: { type: Sequelize.STRING, field: "last_name" },
  active: { type: Sequelize.STRING, field: "last_name" },
  
},{
        freezeTableName: false,
        timestamps: false,
        underscored: false,
        tableName: "users"
    });





/* AuthorModel.hasMany(PostModel, {
    foreignKey: 'author_id'
});
PostModel.belongsTo(AuthorModel, {
    foreignKey: 'author_id'
}); */

const User = db.models.UserModel;

export { User };