exports.signin = function (req, res) {
  res.render("partials/login-modal");
};

exports.signup = function (req, res) {
  res.render("users/registration", {
    layout: 'main-registration'
  });
};