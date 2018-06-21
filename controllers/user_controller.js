exports.signin = function (req, res) {
  res.render("user/signin");
};

exports.account = function (req, res) {
  res.render("user/account");
};

exports.admin = function (req, res) {
  res.render("user/admin");
};