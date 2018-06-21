module.exports = function(app) {

    const cart = require('./routes/cart');
    const category = require('./routes/category');
    const products = require('./routes/products');
    const users = require('./routes/users');
    const myaccount = require('./routes/myaccount');
    const shopping_cart = require('./routes/shopping_cart');
    const about = requre('/routes/about');
    

    app.use('/', index);
    app.use('/myaccount', myaccount);
    app.use('/category', category);
    app.use('/products', products);
    app.use('/shopping_cart', shopping_cart);
    
    
    
}