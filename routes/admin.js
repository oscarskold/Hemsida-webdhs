//mysql
var con = require('../SQL/cart/config/database.js');
// var Connection = mysql.createConnection(con);
var express = require('express');
const session = require('express-session');
var router = express.Router();

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


router.post('/add', function (req, res, next) {
    var name = req.body.name
    var description = req.body.description
    var price = req.body.price

    con.query(`INSERT INTO webdhs.products (name, description, price) VALUE "${name}","${description}","${price}"`, function (err, result) {
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

        con.query(``, function(err, result){})

    })

    module.exports = router;