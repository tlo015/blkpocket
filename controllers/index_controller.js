var db = require("../models");

exports.index= function(req, res) {
    console.log ("Index was hit")
    res.render("index");
};

// exports.favProducts = function (req, res) {
//     console.log ("Category was hit")
//     //find 4 at random
//     db.Product.findAll({
//         // limit: 4,
//         // order: [Sequelize.fn('RAND')]
//     }).then (function(dbProduct) {
//       console.log ("random products");
//       res.render("/", {
//         product: dbProduct
//       });
//     });
//   };