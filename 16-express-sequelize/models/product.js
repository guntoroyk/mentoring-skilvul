"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.Product.belongsTo(models.Seller);
      this.belongsTo(models.seller);
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product",
      tableName: "products",
      // defaultScope: {
      //   attributes: {
      //     exclude: ["description"],
      //   },
      // },
    }
  );
  return Product;
};
