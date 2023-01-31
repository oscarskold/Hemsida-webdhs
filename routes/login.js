//mysql
var con = require('../SQL/cart/config/database.js');
var express = require('express');
const { request, response } = require('../app.js');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '' });
});

router.post('/login', function(req, res, next) {
  var user  = req.body.username
  var password = req.body.password

  if(user && password){
    con.query(`SELECT * FROM users WHERE user_email = ${user}`, function(err, data){
      if (err){
        throw err
      } else{

        if (data.length > 0){
          for(let i = 0; i < data.lenght; i++){
            if (data[i].password == password){
              request.session.user_id = data[i].user_id
              res.send('succses')
            } else{
              res.send('Incorrect Password');
            }
          }
        } else{
          res.send("User doesn't exist't")
        }
        res.end()
      }
   });
   res.send('(:')
  } else{
    res.send("Plese Enter user name and apssword")
    res.end()
  }


});

module.exports = router;
