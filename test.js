var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3030;

function ipParser(req, res, next){
    req.myVar = 'sdfsdf';
    next();
};

function validateSession(req, res, next){
   //some logyc
    next();
};

app.use(bodyParser.json());
app.get('/user', function(req, res, next){
    console.log(req.myVar);
    res.status(200).send(req.ip);
});
app.post('/user', function(req, res, next){
    res.status(200).send(req.body);
});
app.use(ipParser);
app.get('/', function(req, res, next){
    console.log(req.myVar);
    res.status(200).send(req.ip);
});

app.listen(port, function(){
    console.log('Server start success = ' + port);
});