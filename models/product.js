// Import the ORM to create functions that will interact with the database.
var Orm = require("../config/orm.js");

var product = {
  all: function(cb) {
    Orm.all("products", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    Orm.create("products", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    Orm.update("products", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (main_controller.js).
module.exports = product;
