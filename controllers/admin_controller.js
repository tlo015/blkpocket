var db = require('../models');

exports.admin = function (req, res) {
    console.log("Admin was hit");
    res.render("admin/admin");
  };
  
  exports.addAProduct = function (req, res) {
    console.log("========>")
    console.log(req.body);
    // Add id from  onto req.body
    req.body.image_url = "test"
    db.Product.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  
    // console.log("Product data: ", req.body);
  
    //     db.Product.create ({
    //       category_name: req.body.category,
    //       product_name: req.body.product_name,
    //       sku: req.body.sku,
    //       description: req.body.description,
    //       regular_price: req.body.regular_price,
    //       quantity: req.body.quantity,
    //       taxable: req.body.taxable,
    //       image_url: req.body.image_url
          
    //     }).then(function() {
    //       console.log ("Product added")
    //       res.send({ redirect: "user/admin" });
    //     }).catch(function(err) {
    //       res.json(err)
    //     });
  };