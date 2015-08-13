/**
 * Created by Roman on 11.08.2015.
 */
var http = require('http');//load apropriate module, in our case we have standard node module, please read https://nodejs.org/api/
var server;

//in first time please initiate packedge.json --> npm init

/*npm - node package manager, установлюється разом з NodeJS,
 всі модулі, сторонні можна знайти npm-сховищі - https://www.npmjs.com/
 */

//Для того щоб встановити модуль, необхідно - npm install --save, save - тоді необхідно, коли потр створити запис у package.json


//Щоб встановити всі модулі, описані в package.json, необхідно - npm i фбо npm install
//process.env.NODE_ENV = 'production';
//console.log(process.env); env - оточення, яке містить різні конфігураційні константи, або змінні


server = http.createServer(function(req, res){
    var url = req.url.split('/');
    var masterUrl = url[1];

    var enumForUrl = {
        hello: hello
    };

    if(enumForUrl[masterUrl]){
        enumForUrl[masterUrl](res)
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end('Page not found');
    }


    function hello(res){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end('Hello world');
    }

});

server.listen(3030, function(){
    console.log('Server is listening on 3030 port');
});