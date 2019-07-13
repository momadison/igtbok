const router = require("express").Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
        user: 'itsgoingtobeok2@gmail.com',
        pass: 'igtbokadmin'
    }
  });

// Matches with "/api/reservecontroller"
router.route("/")
    .post(function (req, res) {
        const mailOptions = {
            from: 'itsgoingtobeok2@gmail.com', // sender address
            to: 'colematthewg@gmail.com', // list of receivers
            subject: 'testing', // Subject line
            html: '<p>test</p>'// plain text body
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if (err)
                console.log(err)
            else
                console.log(info);
        });
    });


module.exports = router;