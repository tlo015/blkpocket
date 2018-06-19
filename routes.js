module.exports = function (app) {

  const application = require('./routes/application');
  const users = require('./routes/users');
  const trips = require('./routes/product');

  app.use('/products', application);
  app.use('/users', users);
  app.use('/trips', trips);
  //other routes..
}