var express = require('express');
var router  = express.Router();

var product_controller = require('../controllers/product_controller');

router.get('/product', product_controller.product);

router.get('/category', product_controller.category);


module.exports = router;