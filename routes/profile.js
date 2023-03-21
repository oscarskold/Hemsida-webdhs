var con = require('../SQL/cart/config/database.js');
const fs = require('fs');
var express = require('express');
var router = express.Router();
var crypto = require('crypto');


/* GET home page. */
router.get('/:username', function(req, res, next) {
  // Use the database connection object to query the "users" table for the user with username "odir"
  con.query('SELECT * FROM users WHERE username = ?', [req.params.username], function (err, result) {
    if (err) {
      // If there was an error with the query, send an error message
      res.send('Error when retrieving from database');
      return;
    }

    if (result.length > 0) {
      // If the query returned at least one row, render the "profile" page with the user's data
      res.render('profile', result[0]);
    } else {
      // If the query returned zero rows, send an error message
      res.send('Error user not found');
    }
  }); 
});

router.post('/', function(req, res, next) {
  // Use the database connection object to query the "users" table for the user with id "00000000"
  con.query('SELECT * FROM users WHERE id = ?', ['00000000'], function (err, result) {
    if (err) {
      // If there was an error with the query, send an error message
      res.send('Error when retrieving from database');
      return;
    }

    var actualUser = null;

    if (result.length > 0) {
      // If the query returned at least one row, set actualUser to the first row of the result
      actualUser = result[0];
    }

    if (actualUser.password != req.body.old_password) {
      // If the old password entered by the user does not match the actual user's password, render the "profile" page with an error message
      res.render('profile',
        Object.assign(actualUser, { errorMsg: "Old password is wrong. Please try again!" }));
    } else {
      // If the old password is correct, create an object with the new user data
      var updatedUser = {
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
      }

      // Use the addUser function to update the user data in the database
      addUser("00000000", updatedUser, function (err) {
        if (err) {
          // If there was an error updating the database, send an error message
          res.send('Error when updating database');
          return;
        }

        // If the update was successful, render the "profile" page with a success message
        res.render('profile',
          Object.assign(updatedUser, { errorMsg: "Profile info update!" }));
      });
    }
  });
});

function addUser(id, userToAdd, callback) {
  // Use the database connection object to update the "users" table with the new user data
  con.query('UPDATE users SET ? WHERE id = ?', [userToAdd, id], function (err, result) {
    if (err) {
      // If there was an error updating the database, call the callback function with the error
      callback(err);
    } else {
      // If the update was successful, call the callback function with no error
      callback(null);
    }
  });
}
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