var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  sessionid = req.session.userid
  console.log('jads '+sessionid+' dasdas')
  if(sessionid){
    res.render('product-template')
  } else{
    res.render('login')
  }

});

module.exports = router;
