var express = require('express');
var router  = express.Router();

var products_controller = require('../controllers/products_controller');

router.get('/', products_controller.index);

module.exports = router;