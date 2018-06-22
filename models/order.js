'use strict';

module.exports = function (sequelize, DataTypes) {
  const Order = sequelize.define('Order', {
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    sku: {
        type: DataTypes.INTEGER,
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    price: {
        type: DataTypes.DECIMAL,
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
    subtotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
    }
  });
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo(models.Sale, {
      onDelete: "cascade"
    });
  }
  return Order;
}