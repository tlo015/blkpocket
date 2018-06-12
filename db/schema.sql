### Schema

/* Create the database */
DROP DATABASE main_db;
CREATE DATABASE main_db;

/* Use the database */
USE main_db;

/* Create the table */
CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	price INT(255) NOT NULL,
	in_stockck BOOLEAN DEFAULT true,
	PRIMARY KEY (id)
);
