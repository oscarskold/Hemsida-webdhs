//RÖR EJ
//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();
var crypto = require('crypto')




router.post('/', function (req, res, next) {
  var item = req.body.item
  var user = req.session.user

  var id = crypto.randomInt(0, 254)

  console.log(item.name, 'name')
  console.log(req.body.item, 'bodyitem')

  con.query(`INSERT INTO webdhs.${user}_items (id, name, description, price) VALUES ("${id}", "${item.name}", "${item.description}", "${item.price}");`, function (err, result) {
    if (err) {
      throw err
    } else {
      console.log(result, 'result added?')
    }
  });
});
module.exports = router; 