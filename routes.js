module.exports = function(app){

  var index = require('./routes/index');
  var user = require('./routes/user');
  var payment = require('./routes/payment');
  var product = require('./routes/product');
  var admin = require('./routes/admin');

  app.use('/', index);
  app.use('/user', user);
  app.use('/payment', payment);
  app.use('/product', product);
  app.use('/admin', admin);
  //other routes..
}