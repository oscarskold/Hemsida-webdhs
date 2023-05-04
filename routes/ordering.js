var nodemailer = require('nodemailer');
var express = require('express');
const app = express();
var bodyParser = require('body-parser');
var router = express.Router();


//  app.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res, next){
     var name = req.body.name
     var email = req.body.email
     var message = req.body.message
     var item = req.body.prod


    console.log(name+' name '+ email+' email ' + message+' message '+ JSON.stringify(item[1])+' item ')
    //Create a transporter object with a default sender
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

module.exports = router  