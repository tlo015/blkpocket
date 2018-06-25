var express = require('express');
var router  = express.Router();
var users_controller = require('../controllers/users_controller');

router.get('/signup', users_controller.registrationPage);

router.post('/login',  users_controller.loginUser);

module.exports = router;


