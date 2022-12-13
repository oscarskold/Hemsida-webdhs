var express = require('express');
var router = express.Router();

function add(){
  console.log('add(:')
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('checkout', { title: '' });
});

module.exports = router;
