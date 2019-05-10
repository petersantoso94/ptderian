'use strict';
module.exports = function(app) {
  var user_controller = require('../controllers/userControllers');

  // user Routes
  
  app.route('/users/:userID')
  .get(user_controller.get_user_by_id);

  
  
};