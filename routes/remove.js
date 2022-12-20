//RÖR EJ
//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();

 router.post('/', function(req, res, next) {
   req.body.product_id
   con.query("DELETE FROM cart_items WHERE product_id="+req.body.productid+";", function(err, result){
     if (err){
      throw err
     }else{
      console.log(result)
     }
    });
  // console.log(req.body.productid);
  // res.send("Success!")
 });


module.exports = router; 