'user strict';

var mysql = require('mysql');
var dotenv = require('dotenv');
dotenv.config();


//local mysql db connection
var connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DB_USER
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;