//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();

//problem fråga
router.get('/', function (req, res, next) {
  var user = req.session.user;

  var login
  if (req.session.user == undefined) {
    login = false;
    console.log(login)
  } else {
    login = true;
    console.log(login)
  }
  
  if (login == true) {
    con.query(`SELECT * FROM ${user}.cart_items ORDER BY id`, function (err, result) {
      if (err) {
        console.log('not connected', err)
      }
      if (result != '') {
        res.render('checkout', {
          data: result,
          login: login
        })
      } else {
        console.log('else')
        res.render('checkout', {
          data: '',
          productid: ''
        })
      }

    });
  } else {
    console.log('else2')
    res.render('checkout', {
      data: '',
      productid: ''
    })
  }
  
});

module.exports = router;





