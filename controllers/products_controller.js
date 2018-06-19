exports.index= function(req, res) {
    res.render("products/products");
};

exports.category = function (req, res) {
  res.render("products/category");
};
