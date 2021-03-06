var db = require('../models');


exports.registrationPage = function(req,res) {
  res.render('user/registration', {
    layout: 'main-registration'
  });
};

exports.signOutUser = function(req,res) {
  req.logout();
  res.redirect("/");
};

// login
exports.loginUser = function(req, res) {
  console.log("We made it here");
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
  res.json("/");
};

// register a user
exports.signUpUser = function(req,res) {

  db.User.findAll({
    where: {username: req.body.username}
  }).then(function(users) {
    console.log(JSON.stringify(req.body));
    if (users.length > 0) {
      console.log("User Exists");
      res.json({
        duplicateUser: true
        
      });
    //At some point, make sure that only one user can be associated with an email.
    } else {
      console.log("User doesnt exists");
      db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }).then(function() {
        console.log("success");
        res.send({redirect: "/"});
      }).catch(function(err) {
        console.log(JSON.stringify(err));
        res.json(err);
      });
    }
  })
};

