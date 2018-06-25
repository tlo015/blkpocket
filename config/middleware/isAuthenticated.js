module.exports = function(req, res, next) {
    if (req.user) {
        return next();
      }
      req.flash('unAuthenticated', 'Sorry, you must be logged in to see that');
      // If the user isnt' logged in, redirect them to the login page
      return res.redirect("/");
    };
    