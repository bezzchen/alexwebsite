const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    console.log("HOMEPAGE");
    res.sendFile(path.join(__dirname, '.', './client/index.html'));
});
app.get('/contact', function (req, res) {
    console.log("CONTACT");
    res.sendFile(path.join(__dirname, '.', './client/contact.html'));
});
app.get('/ourrooms', function (req, res) {
    console.log("OURROOMS");
    res.sendFile(path.join(__dirname, '.', './client/ourrooms.html'));
});
app.get('/newmarketlocation', function (req, res) {
    console.log("LOCATION");
    res.sendFile(path.join(__dirname, '.', './client/location.html'));
});
app.get('/hotelfacilities', function (req, res) {
    console.log("FACILITIES");
    res.sendFile(path.join(__dirname, '.', './client/hotelfacilities.html'));
});
app.get('/events', function (req, res) {
    console.log("EVENTS");
    res.sendFile(path.join(__dirname, '.', './client/events.html'));
});
app.get('/reviews', function (req, res) {
    console.log("REVIEWS");
    res.sendFile(path.join(__dirname, '.', './client/reviews.html'));
});
app.listen(3000, function() {
    console.log('listening on port 3000');
});
// Import the necessary packages
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail'
  auth: {
    user: 'barry.phasel235@gmail.com',
    pass: 'kittenisminecraft0002',
  },
});

// ...

app.post('/contact-form-process', (req, res) => {
  const name = req.body.Name;
  const email = req.body.Email;
  const message = req.body.Message;

  const mailOptions = {
    from: 'barry.phasel235@gmail.com',
    to: 'barry.phasel235@gmail.com', // Replace with the recipient's email address
    subject: 'New form submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Form submission successful');
    }
  });
});