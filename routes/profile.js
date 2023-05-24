var con = require('../SQL/cart/config/database.js');
var express = require('express');
var router = express.Router();
var crypto = require('crypto')
var session = require('express-session');


// GET user profile page
router.get('/', function (req, res, next) {
  var user = req.session.user;
  console.log(user)
  con.query(`SELECT * FROM webdhs.users WHERE user_name = "${user}"`, function (err, result) {
    if (err) {
      throw err;
    }

    if (result.length > 0) {
      res.render('profile', { data: result });
    } else {
      res.send('Error user not found');
    }
  });
});

module.exports = router;

// POST update user profile
router.post('/update-profile', function (req, res, next) {
  var userid = req.session.userid;
  var oldPassword = req.body.password_old;
  var newPassword = req.body.password_new;
  var confirmPassword = req.body.password_confirm;
  var user = req.body.name

  con.query(`SELECT * FROM webdhs.users WHERE user_id = ${userid}`, function (err, result) {
    if (err) {
      res.send('Error when retrieving from database');
      throw err
    }

    var actualUser = result[0];

    var hash = crypto.createHash('SHA256')
    hash.update(oldPassword).end()
    var oldPassword_hash = hash.digest('hex')

    var hash = crypto.createHash('SHA256')
    hash.update(newPassword).end()
    var newPassword_hash = hash.digest('hex')

    if (oldPassword_hash !== actualUser.user_password) {
      res.send("Old password is wrong. Please try again!");
    } else if (newPassword !== confirmPassword) {
      res.send("New password and confirm password do not match. Please try again!");
    } else {
      con.query(`UPDATE webdhs.users SET user_name ="${user}", user_password = "${newPassword_hash}" WHERE user_id = "${userid}"`, function (err, result) {
        if (err) {
          res.send('Error when updating database');
          throw err;
        } else {
          if (actualUser.user_name != user) {
            con.query(`RENAME TABLE ${actualUser.user_name}_items to ${user}_items;`, function (err, result) {
              if (err) {
                throw err;
              } else {
                res.render('profile', { successMsg: "Profile info updated!", data: [actualUser] });
              }
            })
          } else {
            res.render('profile', { successMsg: "Profile info updated!", data: [actualUser] });

          }

        }



      });
    }
  });
});

module.exports = router;
