var express = require('express');
var router  = express.Router();

var product_controller = require('../controllers/product_controller');

router.get('/category', product_controller.category);

router.get('/ring', product_controller.ring);

router.get('/necklace', product_controller.necklace);

router.get('/earring', product_controller.earring);

router.get('/product', product_controller.product);

//<a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a>






module.exports = router;