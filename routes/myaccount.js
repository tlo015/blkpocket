var express = require('express');
var router  = express.Router();

var myaccount_controller = require('../controllers/myaccount_controller');

router.get('/accounts', myaccount_controller.index);

module.exports = router;