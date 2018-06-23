'use strict';

module.exports = function (sequelize, DataTypes) {
  const Sale = sequelize.define('Sale', {
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
  Sale.associate = function (models) {
    // associations can be defined here
    Sale.belongsTo(models.User, {
      onDelete: "cascade"
    });
  }
  return Sale;
}