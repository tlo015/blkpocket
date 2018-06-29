'use strict';

module.exports = function (sequelize, DataTypes) {
  const CcTransactions = sequelize.define('CcTransactions', {
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
    processor: {
        type: DataTypes.VARCHAR,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    processor_trans_id: {
      type: DataTypes.VARCHAR,
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
    },
    cc_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    cc_type: {
        type: DataTypes.VARCHAR,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    response: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
    }
  });
  User.associate = function (models) {
    // associations can be defined here
    CcTransactions.belongsTo(sales.product, {
      onDelete: "cascade"
    });
  }
  return Order;
}