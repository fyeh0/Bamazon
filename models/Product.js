module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        product_name: DataTypes.STRING,
        department_name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        stock_quantity: DataTypes.INTEGER
    });
    return Product;    
}