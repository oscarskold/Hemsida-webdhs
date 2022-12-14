//mysql
var con = require('../SQL/cart/config/database.js');
// var Connection = mysql.createConnection(con);
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  //ÄNDRA INTE FÖR I HELVETE!!!!!!!!!!!!!!!
  con.query('SELECT id, name, description, price FROM produkt ORDER BY id', function(err, result){
    if (err){
      res.render('Services', {
        data: ''
        })
      console.log('not connected', err)

    } else{
      res.render('Services', {data: result})

      console.log('(:');
    }
  });
});

module.exports = router;