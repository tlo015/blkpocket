'use strict';

module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
  });

  Category.associate = function (models) {
    // associations can be defined here
    Category.hasMany(models.Product, {
      onDelete: "cascade"
    });
  };

  return Category;
};
