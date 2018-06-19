module.exports = function(app){

  var index = require('./routes/index');
  var user = require('./routes/user');
  var payment = require('./routes/payment');
  var product = require('./routes/product');

  app.use('/', index);
  app.use('/users', user);
  app.use('/payment', payment);
  app.use('/product', product);
  //other routes..
}