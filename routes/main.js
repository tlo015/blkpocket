var express = require('express');
var router  = express.Router();

var main_controller = require('../controllers/main_controller');

router.get('/', main_controller.index);

module.exports = router;