//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  req.body.id
  con.query("", function(err, result){
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