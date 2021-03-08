var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
// const SMTPConnection = require('nodemailer/lib/smtp-connection');

/* GET home page. */


router.post('/', (req, res) => {

  const transporter = nodemailer.createTransport({
    host: 'smtp.ionos.com',
    port: 587,
    secure: false,
    auth: {
      user: 'aaron@apexsoftwareservices.com',
      pass: 'Snowghost@12345'
    }
  })

  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'aaronsadino@gmail.com',
  //     pass: 'Snowghost@12345'
  //   }
  // })

  const mailOptions = {
    from: req.body.email,
    to: 'aaron@apexsoftwareservices.com',
    subject: 'Apex Customer',
    text: 'Name: ' + req.body.name + '\nCompany: ' + req.body.company + '\nEmail: ' + req.body.email + '\nTelephone: ' + req.body.telephone + '\nMessage: ' + req.body.message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error){
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent ' + info.response);
      res.render('index');
    }
  })

})


  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.ionos.com',
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: 'aaron@apexsoftwareservices.com',
  //     pass: 'Snowghost@12345'
  //   }
  // })

  // verify connection configuration
// transporter.verify(function(error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });

 router.get('/', function(req, res, next) {
   res.render('index');
 });

 router.get('/privacyPolicy', function(req, res, next) {
  res.render('privacyPolicy');
});

router.get('/termsAndConditions', function(req, res, next) {
  res.render('termsAndConditions');
});








module.exports = router;