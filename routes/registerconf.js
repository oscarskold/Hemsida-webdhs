//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var user = req.body.username
  req.body.email
  req.body.password
  con.query(`CREATE DATABASE ${user};`, function(err, result){
    if (err){
      throw err
    } else{
      con.query(`CREATE TABLE ${user}.cart_items SELECT * FROM shopping_cart.cart_items;`, function(err, result){
        if (err){
          throw err
        } else{
          console.log(result)
        }
      })
    }   
   });
});

module.exports = router;