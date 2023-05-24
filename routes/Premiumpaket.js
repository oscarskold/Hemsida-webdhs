//mysql
var con = require('../SQL/cart/config/database.js');
// var Connection = mysql.createConnection(con);
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  //ÄNDRA INTE FÖR I HELVETE!!!!!!!!!!!!!!!
  con.query(`SELECT id, name, description, price FROM products where id = 2`, function(err, result){
    if (err){
      res.render('premiumPaket', {
        data: ''
        })
      console.log('not connected', err)

    } else{
      console.log(result);
      res.render('premiumPaket', {
        data: result
      })

    }
  });
});

module.exports = router  