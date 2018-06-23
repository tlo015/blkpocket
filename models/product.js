'use strict';

module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // The password cannot be null
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    regular_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    taxable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      validate: {
        len: [1]
      }
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: true,
      validate: {
        len: [1]
      }
    }
  });
  Product.associate = function (models) {
    // associations can be defined here
    Product.belongsTo(models.ProductStatus, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Product;
}