// document.getElementById('test').innerHTML = result;
var mysql = require('mysql')
var con = require('./config/database.js')
// var Connection = mysql.createConnection(con)




con.query('SELECT name, description, price FROM produkt', function(err, result, fields){
    if (err) throw err
    console.log(result)
    
})


