//mysql
var con = require('./config/database.js');
// var Connection = mysql.createConnection(con);
var express = require('express');
var router = express.Router();


router.get('/add', function(req, res, next) {
  
  con.query('Use cart_items', function(err, result){
    
    

  });
});


if (err){
    res.render('cart', {
      data: ''
      })
    console.log('not connected', err)

  } else{
    res.render('cart', {data: result})

    console.log('(:');
  }


module.exports = router;