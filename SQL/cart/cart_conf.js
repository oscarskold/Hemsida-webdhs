//mysql
var con = require('./config/database.js');
// var Connection = mysql.createConnection(con);
var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
  con.query('SELECT name, description, price FROM produkt BY id DESC', function(err, result){
    if (err){
      // req.flash('error', err)
      res.render('cart', {data: ''})
    } else{
      res.render('cart', {data1: result}, {data2: result[1]}, {data3: result[2]})
      console.log(result);
    }
  });
});

module.exports = router;