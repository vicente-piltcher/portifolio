const express = require('express');
const app = express();
const helmet = require('helmet');
const { URL } = require('url');
const bodyParser = require('body-parser')
const methodOverride = require('method-override');
const path = require('path')

var wellConnection = 200;
var badConnection = 404;
var serverError = 500;

/*
app.use(function (req, res, next) {
  console.log('Code:', Date.now());
  next();
});*/

app.get('/', function (req, res, next) {
  console.log('Sending to Home Page!');
  next();
}, function (req, res) {
  console.log('SENDING!!!!!!!')
  res.sendFile(__dirname + '/lib/index.html');
  console.log('MANDEIIIII!!!!!!!')
});

app.get('/contact', function (req, res, next) {
  console.log('Sending to Contact Page!');
  next();
}, function (req, res) {
  console.log('MANDANDO PRA CONTACT POR AQUI!');
  res.sendFile(__dirname + '/lib/contact.html');
  console.log('CHEGOU AI PORRA?')
});

app.use(express.static('public'));


app.listen(1939, function () {
  console.log('***** Starting Server')
  console.log('##### Checking all the middlewares')
});


module.exports = app;