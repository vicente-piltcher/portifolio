const { response, Router } = require('express');
const express = require('express');
const app = express();
const helmet = require('helmet');
const { URL } = require('url');
const bodyParser = require('body-parser')
const methodOverride = require('method-override');


var wellConnection = 200;
var badConnection =  404;
var serverError = 500;

//Little security API
app.use(helmet());


//Some middlewares to attach to the connection well

var actualStatusCode = function (req, res, next) {
  if (res.statusCode == wellConnection) {
    console.log('!!!!! Page Changed')
    next()
  } else {
    console.log('!!!!! Connections didnt go well, Status Code: ' + req.statusCode)
  }
}

var pageExist = function (err, req, res, next) {
  res.statusCode == badConnection ? res.send('Bad Connection!').end : next() 
  res.statusCode == serverError ? res.send('Server Error!').end : next() 
}

app.use(actualStatusCode);
app.use(bodyParser());
app.use(methodOverride());
app.use(logErrors);

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}



//Routes


app.get("/", function (req, res) {
  res.status(200).sendFile(__dirname + '/lib/index.html')
})



app.get("/contact", function (req, res) {
  res.status(200).sendFile(__dirname + '/lib/contact.html');
})

app.use(pageExist);


app.listen(1337, function (next) {
  console.log('***** Starting Server')
  console.log('##### Checking all the middlewares')
});

module.exports = app;