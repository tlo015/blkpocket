'use strict';

module.exports = function (sequelize, DataTypes) {
  const Sales = sequelize.define('Sales', {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  User.associate = function (models) {
    // associations can be defined here
    User.belongsTo(sales.product, {
      onDelete: "cascade"
    });
  }
  return Sales;
}