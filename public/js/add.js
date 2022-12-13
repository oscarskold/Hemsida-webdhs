//mysql
var con = require('../../SQL/cart/config/database.js');
// var Connection = mysql.createConnection(con);
var express = require('express');
var router = express.Router();

function addtocart(prod_id){
  con.query("INSERT INTO cart_items (product_id) SELECT id FROM produkt WHERE id="+prod_id+";", function(err, result){
  console.log(result)
  // con.query()
  alert('(:')
});
  }

addtocart(3)