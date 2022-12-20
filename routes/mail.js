var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'exempel@gmail.com',
        pass: 'exempel pas',
    }
});

var mailOptions = {
    from: 'exempel@gmail.com',
    to: 'Kontakt@web-dhs.se',
    subject: 'test test',
    text: 'Noda är dålig och änkel!!!'
};

function send_mail(){
    transporter.sendMail(mailOptions, function(err, info){
        if (err) {
            console.log(err)
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};