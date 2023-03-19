var con = require('../SQL/cart/config/database.js');
const fs = require('fs');
var express = require('express');
const session = require ('express-session')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var user = req.session.userid
  con.query (`SELECT * FROM users WHERE user_name='${user}'`, function(err, result){
    if (err){
      throw err
    } else {
      console.log(result)
      res.render('profile', { title: '', data: result });
    }
  })
});

module.exports = router;

router.post('/', function(req, res, next) {

  });

module.exports = router;
