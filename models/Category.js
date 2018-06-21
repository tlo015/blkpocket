'use strict';

module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
  });
  Category.associate = function (models) {
    // associations can be defined here
    Category.belongsTo(models.ProductCategory, {
      onDelete: "cascade"
    });
  }
  return Category;
}