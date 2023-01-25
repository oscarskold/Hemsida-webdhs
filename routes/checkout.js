//mysql
var con = require('../SQL/cart/config/database.js');

var express = require('express');
var router = express.Router();
var items = []

//problem fråga
router.get('/', function(req, res, next) {
  res.render('checkout',{
       data: items
     })
  // req.body.id
  // con.query('SELECT product_id FROM cart_items ORDER BY id', function(err, result){
  //    if (err){
  //      console.log('not connected', err)
  //      res.render('checkout', {
  //        data: '',
  //        productid: ''
  //      })
  //    } else{
     
  //      if(result != ''){
  //        var productid = result[0].product_id;
      
  //        con.query('SELECT id, name, description, price FROM produkt WHERE id='+productid+';', function(err, result){
  //          if (err){
  //            res.render('checkout', {
  //              data: '',
  //              productid: ''
  //            })
  //            console.log(err)
  //          } else{
  //            console.log(productid) 
  //            res.render('checkout', {
  //              data: result,
  //              productid: productid
  //            })
  //          }
  //        });
  //      } else{
  //        res.render('checkout', {
  //          data: '',
  //          productid: ''
  //        })
  //        }

  //       console.log('(:');
  //    }
  //  });
});

module.exports = router;





  // con.query('SELECT * FROM produkt ORDER BY id', function(err, result){
  //   if (err){
  //     res.render('Services', {
  //       data: ''
  //       })
  //     console.log('not connected', err)

  //   } else{
  //     res.render('checkout', {
  //       data: result
  //     });
  //     console.log('(:');
  //   }
  // });