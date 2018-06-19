var express = require('express');
var router  = express.Router();

var payment_controller = require('../controllers/payment_controller');

router.get('/cart', payment_controller.index);

module.exports = router;