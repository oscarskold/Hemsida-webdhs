//mysql
var con = require('./config/database.js');
// var Connection = mysql.createConnection(con);
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  
  con.query('SELECT id, name, description, price FROM produkt ORDER BY id', function(err, result){
    
    if (err){
      res.render('cart', {
        data: ''
        })
      console.log('not connected', err)

    } else{
      res.render('cart', {data: result})

      console.log(result);
    }
  });
});

module.exports = router;