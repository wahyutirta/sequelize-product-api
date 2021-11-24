module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'sequelize_api',
    dialect: 'mysql',

    pool: {
        max: 5,
        max: 0,
        acquire: 30000,
        idle: 10000
    }
}