//mysql
var con = require('../SQL/cart/config/database.js');
// var Connection = mysql.createConnection(con);
var express = require('express');
const session = require('express-session');
var router = express.Router();


router.get('/', function(req, res, next) {
  //ÄNDRA INTE FÖR I HELVETE!!!!!!!!!!!!!!!
  con.query('SELECT id, name, description, price FROM products ORDER BY id', function(err, result){
    if (err){
      res.render('Services', {
        data: ''
        })
      console.log('not connected', err)

    } else{
      var login
      if (req.session.userid == undefined){
        login = false;
        console.log(login)
      } else{
        login = true;
        console.log(login)
      }



      res.render('Services', {
        data: result,
        login: login
      })

    }
  });
});

module.exports = router;