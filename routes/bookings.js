var nodemailer = require('nodemailer');
var express = require('express');
const app = express();
var bodyParser = require('body-parser');
var router = express.Router();


 app.use(bodyParser.urlencoded({ extended: true }));


console.log("it works!")

router.post('/', function(req, res, next){
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var date = req.body.date
    var bookings_name = req.body.bookings_name
    var time = req.body.time

    
    // Send the email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bestallning.webdhs@gmail.com',
        pass: 'bqqfkcemkutcibhl'
      }
    });
  
    const mailOptions = {
      from: 'bestallning.webdhs@gmail.com',
      to: email,
      cc: 'kontakt@web-dhs.se',
      subject: 'Bokningsbekräftelse',
      text: `${bookings_name}\nNamn: ${name}\nEmail: ${email}\nDatum: ${date}\nBokad tid: ${time}\n'Meddelande': ${message}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.send('Error: ' + error);
      } else {
        console.log('Email sent: ' + info.response);
        res.render('homepage', { title: '' });
      }
    });
  });

module.exports = router  
