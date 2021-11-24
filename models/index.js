const dbCon = require('../config/db.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbCon.DB,
    dbCon.USER,
    dbCon.PASSWORD, {
        host: dbCon.HOST,
        dialect: dbCon.dialect,
        operatorsAliases: false,

        pool: {
            max: 5,
            min: dbCon.pool.min,
            acquire: dbCon.pool.acquire,
            idle: dbCon.pool.idle,
        }
    }
    

)

sequelize.authenticate().then(() =>{
    console.log('connection established');
}).catch(err => {
    console.log('Error'+ err);
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./productModel.js')(sequelize, DataTypes)


db.sequelize.sync({force: false}).then(() => {
    console.log('re-sync done!')
})

module.exports = db
