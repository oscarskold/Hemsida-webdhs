var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  sessionid = req.session.userid
  if(sessionid){
    res.render('product-template')
  } else{
    res.render('login')
  }

});

module.exports = router;
