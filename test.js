var express = require('express');

var app = express();

var mongoose = require('mongoose');

require('./models');

var port = process.env.PORT || 3030;

require('./routes')(app);


var myModule = require('./handlers/user');

//mongoose.connect('mongodb://localhost:27017/myTestDb');
mongoose.connect('localhost', 'myTestDb', 28017);

var db = mongoose.connection;

db.on('error', function(err){
    console.error(err);
});

db.once('open', function(){
    app.listen(port, function(){
        console.log('Server start success = ' + port);
    });
});


