// document.getElementById('test').innerHTML = result;
var con = require('./config/database.js')
// var Connection = mysql.createConnection(con)




con.query('SELECT name FROM produkt', function(err, result, fields){
    if (err) throw err
    console.log(result[0])
    
})


