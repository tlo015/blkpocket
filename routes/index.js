var express = require('express');
var router  = express.Router();

var index_controller = require('../controllers/index_controller');

router.get('/', index_controller.index);

// router.get('/', index_controller.favProducts)

module.exports = router;