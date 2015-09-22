var express = require('express');

var app = express();

var port = process.env.PORT || 3030;

var mongoose = require('mongoose');

var db1 = mongoose.createConnection('localhost', 'myTestDb', 27017, {server: {poolSize: 10}});
var db2 = mongoose.createConnection('localhost', 'test', 27017, {server: {poolSize: 10}});



db1.on('error', function(err){
    console.error(err);
});

db1.once('open', function(){
    console.log('connected');
});

db2.on('error', function(err){
    console.error(err);
});

db2.once('open', function(){
    console.log('connected');
});

//'============ Load Routes ==============';
require('./routes')(app);
//'============ Load Routes ==============';


var myModule = require('./handlers/user');

app.listen(port, function(){
    console.log('Server start success = ' + port);
});