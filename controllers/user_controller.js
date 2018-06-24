var db = require('../models');

exports.signin = function (req, res) {
  console.log("Signin was hit");
  res.render("user/signin");
};

exports.account = function (req, res) {
  console.log("Account was hit");
  res.render("user/account");
};

