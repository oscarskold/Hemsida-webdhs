//RÖR EJ
//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
  var prodid = req.body.prodid
  var user = req.session.userid

  console.log(req.body,'body')
  console.log(req.body.prodid,'bodyid')

     con.query(`INSERT INTO ${user}.cart_items (product_id) SELECT id FROM products WHERE id=${prodid};`, function(err, result){
       if (err){
       throw err
       } else{
       console.log(result)
       }     
      });
  }); 
module.exports = router; 