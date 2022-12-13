// document.getElementById('test').innerHTML = result;
var con = require('./config/database.js')
// var Connection = mysql.createConnection(con)




con.query('SELECT id, name, description, price FROM produkt ORDER BY id', function(err, result, fields){
    if (err) throw err
    console.log(result)
    
})


