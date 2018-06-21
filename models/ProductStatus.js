'use strict';

module.exports = function (sequelize, DataTypes) {
  const ProductStatus = sequelize.define('ProductStatus', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  ProductStatus.associate = function (models) {
    // associations can be defined here
    ProductStatus.hasMany(models.Product, {
      onDelete: "cascade"
    });
  }
  return ProductStatus;
}