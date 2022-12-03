//Connecting to server
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin',
    port: '3307',
    database: 'webdhs'
});

module.exports = con;