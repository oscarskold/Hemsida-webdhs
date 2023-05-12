//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();
var crypto = require('crypto')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '' });
});

router.post('/', function(req, res, next) {
  var user  = req.body.username
  var password = req.body.password
  var hash = crypto.createHash('SHA256')
  hash.update(password).end()
  var password_hash = hash.digest('hex')

  console.log(user)

  if (!user || !password_hash) {
    return res.send("Please enter username and password");
  }

  con.query(`USE webdhs;`, function(err, result) {
    if (err) {
      return next(err);
    }

    con.query(`SELECT * FROM users WHERE user_name = '${user}'`, function(err, result) {
      if (err) {
        return next(err);
      }

      if (result.length == 0) {
        return res.send("User doesn't exist");
      }

      if (!result[0].user_password) {
        return res.send("Password not found");
      }      


      if (result[0].user_password !== password_hash) {
        return res.send('Incorrect Password');
      } 
      console.log(user, 'user')
      req.session.user = user;
      console.log(result[0].user_id, 'id')
      req.session.userid = result[0].user_id;

      res.redirect('/')
    });
  });
});

module.exports = router;
