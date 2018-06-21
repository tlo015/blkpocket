'use strict';

module.exports = function (sequelize, DataTypes) {
  const Order = sequelize.define('Order', {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
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
    name: {
      type: DataTypes.VARCHAR,
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
  User.associate = function (models) {
    // associations can be defined here
    Order.hasMany(sales.product, {
      onDelete: "cascade"
    });
  }
  return Order;
}