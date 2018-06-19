const connection = require("./connection.js");

// Object of functions for db queries
let Orm = {

    // Select all records from products table
    selectAll: function(response) {
        let queryString = "SELECT * FROM products";
        connection.query(queryString, function(err, data){
            if (err) throw err;
            response(data);
        });
    },
    
    // Insert into the products table with name and details
    insertOne: function(products, response) {
        let queryString = "INSERT INTO products (name, category, inventory, price) VALUES (?,?)";
        connection.query(queryString, [products, false], function(err, data) {
            if (err) throw err;
            response(data);
        });
    },
    
    // Update products info
    updateOne: function(id, response) {
        let queryString = "UPDATE products SET ? WHERE ?";
        connection.query(queryString, [{ devoured: true}, {id:id}], function(err, data) {
            if (err) throw err;
            response(data);
        });
    },

    // Delete record from products table 
    deleteOne: function(id, response) {
        let queryString = "DELETE FROM products WHERE ?";
        connection.query(queryString, [{ id:id }], function(err, data) {
            if (err) throw err;
            response(data);
        });
    }
};

module.exports = Orm;