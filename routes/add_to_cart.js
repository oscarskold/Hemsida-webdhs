//RÖR EJ
//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
  var product = req.body.obj;
  var user = req.session.userid
  console.log(product)
  con.query(`USE DATABASE ${user}`,function(err, result){
    con.query(`INSERT INTO cart_items (product_id) SELECT id FROM produkt WHERE id=${product[0].id};`, function(err, result){
      if (err){
      throw err
      } else{
      console.log(result)
      }   
      });
      console.log(req.body.id);
    });
  });
module.exports = router;
  