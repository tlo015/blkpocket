module.exports = function(app) {

    const index = require('./routes/index');
    const cart = require('./routes/cart');
    const category = require('./routes/category');
    const products = require('./routes/products');
    const myaccount = require('./routes/myaccount');
    const shopping_cart = require('./routes/shopping_cart');
    // const about = require('/routes/about');
    const signup = require('./routes/users');
    

    app.use('/', index);
    app.use('/signup', signup);
    app.use('/myaccount', myaccount);
    app.use('/category', category);
    app.use('/products', products);
    // app.use('/shopping_cart', shopping_cart);
    
    
    
}