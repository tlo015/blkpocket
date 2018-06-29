'use strict';

module.exports = function (sequelize, DataTypes) {
  const Categories = sequelize.define('Categories', {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  // User.associate = function (models) {
  //   // associations can be defined here
  //   User.hasMany(models.product, {
  //     onDelete: "cascade"
  //   });
  // }
  // return Categories;
}