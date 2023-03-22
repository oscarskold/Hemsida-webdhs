const con = require('../SQL/cart/config/database.js');
const express = require('express');
const router = express.Router();

// GET user profile page
router.get('/:username', function(req, res, next) {
  con.query('SELECT * FROM users WHERE username = ?', [req.params.username], function (err, result) {
    if (err) {
      res.send('Error when retrieving from database');
      return;
    }

    if (result.length > 0) {
      res.render('profile', { data: result });
    } else {
      res.send('Error user not found');
    }
  }); 
});

// POST update user profile
router.post('/update-profile', function(req, res, next) {
  const userId = req.session.userid;
  const oldPassword = req.body.password_old;
  const newPassword = req.body.password_new;
  const confirmPassword = req.body.password_confirm;

  con.query('SELECT * FROM users WHERE id = ?', [userId], function (err, result) {
    if (err) {
      res.send('Error when retrieving from database');
      return;
    }

    const actualUser = result[0];

    if (oldPassword !== actualUser.password) {
      res.render('profile', { errorMsg: "Old password is wrong. Please try again!", data: [actualUser] });
    } else if (newPassword !== confirmPassword) {
      res.render('profile', { errorMsg: "New password and confirm password do not match. Please try again!", data: [actualUser] });
    } else {
      con.query('UPDATE users SET user_name = ?, email = ?, password = ? WHERE id = ?', [req.body.user_name, req.body.email, newPassword, userId], function (err, result) {
        if (err) {
          res.send('Error when updating database');
          return;
        }

        actualUser.user_name = req.body.user_name;
        actualUser.email = req.body.email;
        actualUser.password = newPassword;

        res.render('profile', { successMsg: "Profile info updated!", data: [actualUser] });
      });
    }
  });
});

module.exports = router;
