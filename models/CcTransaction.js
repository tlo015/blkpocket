'use strict';

module.exports = function (sequelize, DataTypes) {
  const CcTransaction = sequelize.define('CcTransaction', {
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    processor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    processor_trans_id: {
      type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
  CcTransaction.associate = function (models) {
    // associations can be defined here
    CcTransaction.belongsTo(models.Sale, {
      onDelete: "cascade"
    });
  }
  return CcTransaction;
}