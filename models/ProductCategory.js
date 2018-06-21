'use strict';
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  
  ProductCategory.associate = function(models) {
    // associations can be defined here
    ProductCategory.hasMany(models.Product, {
      onDelete: "cascade"
    });
  }
  return ProductCategory;
};