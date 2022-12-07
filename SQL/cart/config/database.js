//Connecting to server
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin',
    port: '3307',
    database: 'shopping_cart'
});

// con.query('SELECT name FROM produkt', function(err, result, fields){
//     if (err) throw err
//     console.log(result[0])
    
// })


module.exports = con;