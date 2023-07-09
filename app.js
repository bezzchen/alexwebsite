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
app.listen(3000, function() {
    console.log('listening on port 3000');
});
