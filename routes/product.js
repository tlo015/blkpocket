var express = require('express');
var router  = express.Router();

var products_controller = require('../controllers/products_controller');

router.get('/', products_controller.index);

router.get('/category', products_controller.category);

module.exports = router;