//Connecting to server
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin',
    port: '3307',
    database: 'webdhs'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('connected!')

})

