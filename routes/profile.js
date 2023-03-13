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
  
  var users = null;

  try {
    //console.log("test")
    var rawData = fs.readFileSync('users.json');
    users = JSON.parse(rawData);
  } catch (err) {
    res.send('Error when retrieving from database');
    return;
  }

  for (const user of users) {
    //console.log(user)

    if (user.username == user) {
      res.render('profile', user);
      return;
    }
  }

  res.send("Error user not found");


router.post('/', function(req, res, next) {

  var users = null;

  try {
      var rawData = fs.readFileSync('users.json');
      users = JSON.parse(rawData);
  } catch (err) {
      res.send('Error when retrieving from database');
      return;
  }

  var actualUser = null

  for (const user of users) {
    //console.log(user)

    if (user.id == "00000000") {
      actualUser = user
    }
  }

  if (actualUser.password != req.body.old_password) {
    res.render('profile',
      Object.assign(actualUser, { errorMsg: "Old password is wrong. Please try again!" }));
  } else {
    var updatedUser = {
      username: req.body.username,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    }
  
    addUser("00000000", updatedUser, users)
  
    save(users)
  
    res.render('profile',
    Object.assign(updatedUser, { errorMsg: "Profile info update!" }));
  }
});

function addUser(id, userToAdd, usersList) {
  var objIndex = usersList.findIndex((obj => obj.id == id));

  usersList[objIndex] = userToAdd
  usersList[objIndex].id = id;
  
  console.log(usersList)
}

function save(usersList) {
  let dataToSave = JSON.stringify(usersList);
    fs.writeFileSync('users.json', dataToSave);
}


module.exports = router;
