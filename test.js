var express = require('express');

var app = express();

var port = process.env.PORT || 3030;

//'============ Load Routes ==============';
require('./routes')(app);
//'============ Load Routes ==============';


var myModule = require('./handlers/user');

app.listen(port, function(){
    console.log('Server start success = ' + port);
});