//Connecting to server
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin',
    port: '3307',
    database: 'shopping_cart'
});

module.exports = con;