//Connecting to server
var mysql = require('mysql');

var con = mysql.createConnection({
    host: '212.247.67.219',
    user: 'DBadmin',
    password: 'j59rtVCbYdjHLACb2 ',
    port: '3306',
    database: 'webdhs'
});

module.exports = con;