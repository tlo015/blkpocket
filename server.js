var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session'); 
// var passport = require("./config/passport");
var db = require("./models");

var app = express();

var PORT = process.env.PORT || 8080;

// Serve static content for the app from "public"
app.use(express.static("public"));

// Parse application/x-222-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// Set Handlebars
var expbhs = require("express-handlebars");

app.engine("handlebars", expbhs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and via the server access to them
require('./routes')(app);

db.sequelize.sync({force: true}).then(function () {
	// set our app to listen to the port we set above
  var server = app.listen(app.get('port'), function() {
  	// then save a log of the listening to our debugger.
    console.log('Express server listening on port ' + server.address().port);
  });
});
