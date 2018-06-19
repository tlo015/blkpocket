var express = require('express');
var router  = express.Router();

var category_controller = require('../controllers/category_controller');

router.get('/', category_controller.index);

//rendering a partial depending on what is clicked
// router.get('/:page/', category_controller.page);



module.exports = router;