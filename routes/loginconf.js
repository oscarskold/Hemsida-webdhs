//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var user  = req.body.username
  var password = req.body.password
  con.query("", function(err, result){
     if (err){
       throw err
     } else{
       console.log(result) 
     }   
  });
  res.send('(:')
});

module.exports = router;