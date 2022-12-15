//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  req.headers.user
  req.headers.pass
  con.query("", function(err, result){
    if (err){
      throw err
    } else{
      console.log(result)
    }   
   });
  console.log(  req.headers.user, req.headers.pass);
  res.send(  req.headers.user, req.headers.pass)
});

module.exports = router;