var express = require('express');
var mongoose = require('mongoose');

var app = express();
var db;
var port = process.env.PORT || 3030;

mongoose.connect('localhost', 'testDb');
db = mongoose.connection;
db.once('open', function(){
    require('./routes')(app);

    app.use(function(req, res, next) {
        //To allow cors domain requests

       /* res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();*/
    });

    app.use(express.static(__dirname + '/public'));

    app.listen(port, function () {
        console.log("Express server listening on port " + port);
        console.log("HOST: " + "http://localhost:" + port);
    });
});

db.on('error', function(err){
    console.log(err);
});


