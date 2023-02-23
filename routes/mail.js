var nodemailer = require('nodemailer');
var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();

router.post('/', function(req, res, next){
     var name = req.body.name
     var email = req.body.name
     var message = req.body.message
     var items = req.body.submit

     console.log(items)
    
     // //Create a transporter object with a default sender
    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         user: 'bestallning.webdhs@gmail.com',
    //         pass: 'bqqfkcemkutcibhl',
    //     }
    // });

    // //Define the email options
    // var mailOptions = {
    //     from: `${email}`,
    //     to: 'Kontakt@web-dhs.se',
    //     subject: `${name}`+` product`,
    //     text: `${message}`
    // };

    // //Send the email
    // function send_mail(){
    //     transporter.sendMail(mailOptions, function(err, info){
    //         if (err) {
    //             throw (err)
    //         } else {
    //             console.log('Email sent');
    //         }
    //     });
    // };
    // send_mail()

})

