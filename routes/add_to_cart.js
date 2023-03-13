//RÖR EJ
//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
  var productid = req.body.id
  var user = req.session.userid

  res.send(req.body.id)
  console.log(productid)
    con.query(`INSERT INTO ${user}.cart_items (product_id) SELECT id FROM products WHERE id=${productid};`, function(err, result){
      if (err){
      throw err
      } else{
      console.log(result)
      }     
      });
  }); 
module.exports = router; 
 