'use strict';

module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // The password cannot be null
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    regular_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    taxable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
  Product.associate = function (models) {
    // associations can be defined here
    Product.belongsTo(models.ProductStatuses, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Product;
}