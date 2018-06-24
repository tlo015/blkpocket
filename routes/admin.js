var express = require('express');
var router = express.Router();

var admin_controller = require('../controllers/admin_controller');

router.get ('/admin', admin_controller.admin);

router.post('/admin/newProduct', admin_controller.addAProduct);

module.exports = router;