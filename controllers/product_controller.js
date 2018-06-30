var db = require("../models");

exports.category = function (req, res) {
  console.log ("Category was hit")
  //find all
  db.Product.findAll({
  }).then (function(dbProduct) {
    console.log ("all products");
    res.render("product/category", {
      product: dbProduct
    });
  });
};

exports.ring = function (req, res) {
  console.log ("Category was hit")
  //find all rings
  db.Product.findAll({
    where: {
      category_name: "rings"
    }
  }).then (function(result) {
    console.log ("category products", result);
    res.render("product/ring", {
      product: result
    });
  });
};

exports.necklace = function (req, res) {
  console.log ("Category was hit")
  //find all necklaces
  db.Product.findAll({
    where: {
      category_name: "necklace"
    }
  }).then (function(result) {
    console.log ("category products", result);
    res.render("product/necklace", {
      product: result
    });
  });
};

exports.earring = function (req, res) {
  console.log ("Category was hit")
  //find all earrings
  db.Product.findAll({
    where: {
      category_name: "earrings"
    }
  }).then (function(result) {
    console.log ("category products", result);
    res.render("product/earring", {
      product: result
    });
  });
};

exports.product = function(req, res) {
  console.log("Products was hit")
  db.Product.findOne({
    where: {
      id: req.body.id
    }
  }).then (function(dbProduct) {
    console.log (req.params.id)
    res.render("product/product", {
      product: dbProduct
    });
  });
};
