var express = require('express');
var router  = express.Router();

var category_controller = require('../controllers/category_controller');

router.get('/', category_controller.index);

module.exports = router;