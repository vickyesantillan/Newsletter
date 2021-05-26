const express = require('express');
const request = require('request');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); //specified static folder

app.listen(3000, function () {
  console.log('server on port 3000');
});

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

app.post('/', function (req, res) {
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;
  console.log(firstName, lastName, email);
});
