//mysql
var con = require('../SQL/cart/config/database.js');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  
  con.query('SELECT id, product_id FROM cart_items ORDER BY id', function(err, result){


    if (err){
      res.render('checkout', {
        data: ''
        })
      console.log('not connected', err)

    } else{
      res.render('checkout', {data: result})

      console.log('(:');
    }
  });

});

module.exports = router;
