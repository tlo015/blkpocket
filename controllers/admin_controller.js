var db = require('../models');

exports.admin = function (req, res) {
    console.log("Admin was hit");
    res.render("admin/admin");
  };
  
exports.addAProduct = function (req, res) {
  console.log("========>")
  console.log(req.body);
  // Add id from  onto req.body
  db.Product.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });

};