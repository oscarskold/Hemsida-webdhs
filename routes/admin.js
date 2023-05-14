//mysql
var con = require('../SQL/cart/config/database.js');
// var Connection = mysql.createConnection(con);
var express = require('express');
var router = express.Router();
var date_time = new Date();
var multer = require('multer');
var fs = require('fs-extra')

router.get('/', function (req, res, next) {
    if (req.session.user == "test") {
        //ÄNDRA INTE FÖR I HELVETE!!!!!!!!!!!!!!!
        con.query('SELECT id, name, description, price FROM products ORDER BY id', function (err, result) {
            if (err) {
                res.render('admin', {
                    data: ''
                })
                console.log('not connected', err)

            } else {

                //hihi jag ändrade!!!!!!!!!!!!!!!!!!!!!!!!!!!!!    
                con.query('SELECT id, name, description, price FROM bookings ORDER BY id', function (err, bookres) {
                    if (err) {
                        res.render('admin', {
                            data: ''
                        })
                        console.log('not connected', err)
                    }
                    res.render('admin', {
                        data: result,
                        bookingdata: bookres
                    })
                })

            }
        });
    } else {
        res.redirect('/')
    }
});



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,__dirname + './public/img')
    },

    filename: function (req, file, cb) {
        var ext = path.extname(file.originalname);
        var name = req.body.name;
        cb(null, name + ext) // rename the file to the "name" variable plus the original extension
    }
});

var upload = multer({ des: __dirname + './public/img'})

// upload.single('file'), 
router.post('/add', upload.single('product_img'), function (req, res, next) {

    console.log(req.file, 'file')


    var name = req.body.name
    var description = req.body.description
    var price = req.body.price

    var year = date_time.getFullYear();
    var month = ("0" + (date_time.getMonth() + 1)).slice(-2);
    var date = ("0" + date_time.getDate()).slice(-2);


    con.query(`INSERT INTO webdhs.products (name, description, price, created, modified) VALUE ("${name}", "${description}", ${price}, "${year + "-" + month + "-" + date}", "${year + "-" + month + "-" + date}") `, function (err, result) {
        if (err) {
            throw err;
        } else {
            con.query('SELECT id, name, description, price FROM products ORDER BY id', function (err, result) {
                if (err) {
                    res.render('admin', {
                        data: ''
                    })
                    console.log('not connected', err)



                } else {
                    con.query('SELECT id, name, description, price FROM bookings ORDER BY id', function (err, bookres) {
                        if (err) {
                            res.render('admin', {
                                data: ''
                            })
                            console.log('not connected', err)
                        }
                        res.render('admin', {
                            data: result,
                            bookingdata: bookres,
                            message: 'Added product'
                        })
                    })
                }

            })

        }
    })
})

router.post('/delete', function (req, res, next) {

    con.query(``, function (err, result) { })

})

module.exports = router;