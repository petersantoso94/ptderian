'user strict';
var sql = require('./user_db.js');

//User object constructor
var User = function(user){
    this.user = user.user;
    this.username = user.username;
    this.created_at = new Date();
};

User.getUserByID = function (userID, result){
    sql.query("Select * from users where id = ? ", userID, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
}

module.exports = User;