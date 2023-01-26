//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var user = req.body.username
  var email = req.body.email
  var password = req.body.password
  con.query(`CREATE DATABASE IF NOT EXISTS ${user};`, function(err, result){
    if (err){
      throw err
    } else{
      con.query(`CREATE TABLE IF NOT EXISTS ${user}.cart_items SELECT * FROM webdhs.cart_items;`, function(err, result){
        if (err){
          throw err
        } else{
          con.query(`CREATE USER IF NOT EXISTS '${user}'@'%' IDENTIFIED WITH mysql_native_password BY '${password}';`)
        }
      })
    }   
   });
});

module.exports = router;