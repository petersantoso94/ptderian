'use strict';
module.exports = function(app) {
  var user_controller = require('../controllers/userControllers');

  // user Routes
  
  app.route('/users')
  .get(user_controller.get_user_by_id);

  app.route('/api/user/login')
  .post(user_controller.post_login);

};