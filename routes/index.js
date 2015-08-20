/**
 * Created by Roman on 20.08.2015.
 */
module.exports = function(app){
    function ipParser(req, res, next){
        req.myVar = 'sdfsdf';
        next();
    };

    function validateSession(req, res, next){
        //some logyc
        next();
    };

    app.use(bodyParser.json());
    app.get('/', function(req, res, next){
        console.log(req.myVar);
        res.status(200).send(req.ip);
    });
};