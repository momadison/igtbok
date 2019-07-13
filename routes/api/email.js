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
        let NewVolunteer =
            `<h1>Hello Admins, ${req.body.volunteerFirstName} would like to volunteer!</h1>
            <p>My name is: ${req.body.volunteerFirstName} ${req.body.volunteerMiddleName} ${req.body.volunteerLastName}.</p>
            <p>My email address is: ${req.body.volunteerEmailAddress}</p>
            <p>My phone number is: ${req.body.volunteerPhone}</p>
            <p>I work for: ${req.body.volunteerCompany}</p>
            <p>I want to volunteer because: ${req.body.volunteerWhy}</p>
            <p>I have previous volunteer experience here: ${req.body.volunteerPrevious}</p>
            <p>I consider myself an expert in: ${req.body.volunteerExpertise}</p>
            <p>Advocate/Teaching: ${req.body.volunteerAdvocateTeaching}</p>
            <p>Fundraising: ${req.body.volunteerFundraising}</p>
            <p>Social Media: ${req.body.volunteerSocialMedia}</p>
            `
            
        const mailOptions = {
            from: 'itsgoingtobeok2@gmail.com', // sender address
            to: 'colematthewg@gmail.com', // list of receivers
            subject: 'I would like to volunteer! (online form submission)', // Subject line
            html: NewVolunteer// plain text body
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if (err)
                console.log(err)
            else
                console.log(info);
        });
    });


module.exports = router;