var express = require('express');
var router  = express.Router();

var myaccount_controller = require('../controllers/myaccount_controller');

router.get('/', myaccount_controller.index);

module.exports = router;