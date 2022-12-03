var mysql = require('mysql')
var con = require('./config/databasejs')
var Connection = mysql.createConnection(con)





Connection.qurey()

Connection.end