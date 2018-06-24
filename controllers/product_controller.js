// var db= require("../models");

exports.category = function (req, res) {
  console.log ("Category was hit")
  //get all Rings 
  // db.Categories.findAll({
  //   where: {
  //     category: req.params.rings
  //   }
  // }).then (function(dbRings) {
  //   console.log (dbRings);
    res.render("product/category");
  // });
 
};

exports.product= function(req, res) {
  console.log("Products was hit")
  
  //get info related to a specific ID 
  // db.Product.findAll({
  //   where: {
  //     id: req.body.id
  //   }
  // }).then (function (dbProduct) {
  res.render("product/product");
  // });
};


