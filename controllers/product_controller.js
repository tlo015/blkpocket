var db = require("../models");

exports.category = function (req, res) {
  console.log ("Category was hit")
  //get all Rings
  db.Product.findAll({
    // where: {
    //   category_name: req.params.rings
    // }
  }).then (function(dbProduct) {
    console.log ("all products");
    res.render("product/category", {
      product: dbProduct
    });
  });
};


exports.product = function(req, res) {
  console.log("Products was hit")
    
    res.render("product/product");
};
