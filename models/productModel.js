module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("product", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        qty: {
            type: DataTypes.INTEGER,
        },
        picture: {
            type: DataTypes.TEXT,
        },
        expiredAt: {
            type: DataTypes.DATE,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
        },
    
    })

    return Product

}