const express        = require('express');
const path           = require('path');
const logger         = require('morgan');
const bodyParser     = require('body-parser');
const session        = require('express-session'); 
const passport 		 = require("./config/passport");
const config		 = require("./config/extra-config");


var app = express();

app.set('views', path.join(__dirname, 'views'));

var PORT = process.env.PORT || 8080;

// Serve static content for the app from "public"
app.use(express.static("public"));

// Parse application/x-222-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars
var expbhs = require("express-handlebars");

app.engine("handlebars", expbhs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const isAuth  = require("./config/middleware/isAuthenticated");
const authCheck  = require('./config/middleware/attachAuthenticationStatus');

app.use(logger('dev'));
app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);

// Import routes and vie the server access to them
// var index = require("./routes/index");
// var category = require("./routes/category");
// var products = require("./routes/products");
// var cart = require("./routes/cart");
// var users = require("./routes/users");
// var myaccount = require("./routes/myaccount");

// app.use("/", index);
// app.use("/category", category);
// app.use("/products", products);
// app.use("/cart", cart);
// app.use("/users", users);
// app.use("/myaccount", myaccount);

require('./routes')(app);


// app.listen(PORT, function() {
// 	console.log("App listening at localhost:" + PORT);
// });

app.use(function(req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
  });
  app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
	  message: err.message,
	  error: (app.get('env') === 'development') ? err : {}
	})
  });

  module.exports = app;
