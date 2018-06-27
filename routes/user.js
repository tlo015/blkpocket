var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user_controller');

router.get('/signin', user_controller.signin);

router.get('/signup', user_controller.signup);

module.exports = router;