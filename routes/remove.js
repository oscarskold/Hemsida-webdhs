//RÖR EJ
//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
  var id = req.body.id
  var user = req.session.user
  console.log(id, 'id')
  con.query(`DELETE FROM ${user}.cart_items WHERE id=${id};`, function (err, result) {
    if (err) {
      throw err
    } else {
      console.log('sucsses')
      res.send('sucsses')
    }
  });
});


module.exports = router; 