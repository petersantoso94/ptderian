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
User.login = function (params, result){   
        if(params.username == "peter" && params.password == "adminadmin") {
            result(null, {"access_token":"testabcdefghijklmnopqrstuvwxyz"});
        }
        else{
            var err = "username or password not found";
            console.log("error: ", err);
            result(err, null);
        }
}

module.exports = User;