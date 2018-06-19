var express = require("express");
var bodyParser = require("body-parser");

var app = express();

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

// Import routes and vie the server access to them
var index = require("./routes/index");
var category = require("./routes/category");
var products = require("./routes/products");
var cart = require("./routes/cart");
//var signIn = require("./routes/signin");
var myaccount = require("./routes/myaccount");

app.use("/", index);
app.use("/category", category);
app.use("/products", products);
app.use("/cart", cart);
//app.use("/signin", signIn);
app.use("/myaccount", myaccount);

app.listen(PORT, function() {
	console.log("App listening at localhost:" + PORT);
});
