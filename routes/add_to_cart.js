//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();

// id = 3;

// con.query("INSERT INTO cart_items (product_id) SELECT id FROM produkt WHERE id="+id+";", function(err, result){
//   if (err){
//     throw err
//   } else{
//     console.log(result)
//   }   
//  });

router.post('/', function(req, res, next) {
  req.body.id
  con.query("INSERT INTO cart_items (product_id) SELECT id FROM produkt WHERE id="+req.body.id+";", function(err, result){
    if (err){
      throw err
    } else{
      console.log(result)
    }   
   });
  console.log(req.body.id);
  res.send("Success!")
});

module.exports = router;