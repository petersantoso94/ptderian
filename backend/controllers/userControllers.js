'use strict';
var User = require('../models/user_model.js');
exports.get_user_by_id = function(req, res) {
    User.getUserByID(req.params.userID,function(err, user) {
      if (err)
        res.send(err);
      res.send(user);
    });
  };