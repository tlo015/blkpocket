// Set up MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password: "mypass",
		database: "main_db"
	});


// Make the connection
connection.connect(function(err) {
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// Export connection for the ORM
module.exports = connection;
