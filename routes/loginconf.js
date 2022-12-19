//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  req.body.username = user;
  req.body.password = pass;
  // // con.query("", function(err, result){
  // //   if (err){
  // //     throw err
  // //   } else{
  // //     console.log(result)
  // //   }   
  // //  });
  console.log(user, pass);
  // res.send(req.body.username, req.body.password)
  res.send('(:in')
});

module.exports = router;