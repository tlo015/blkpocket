'use strict';

module.exports = function (sequelize, DataTypes) {
  const ProductStatuses = sequelize.define('ProductStatuses', {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
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
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.product, {
      onDelete: "cascade"
    });
  }
  return ProductStatuses;
}