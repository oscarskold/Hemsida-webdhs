//RÖR EJ
//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
  req.body.id
   res.send('8:')
//   con.query("INSERT INTO cart_items (product_id) SELECT id FROM produkt WHERE id="+req.body.id+";", function(err, result){
//     if (err){
//       throw err
//     } else{
//       console.log(result)
//     }   
//    });
//   // console.log(req.body.id);
//   // res.send("Success!")
});

module.exports = router;
