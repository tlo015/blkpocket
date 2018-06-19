var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user_controller');

router.get('/signin', user_controller.signin);

router.get('/account', user_controller.account);

module.exports = router;