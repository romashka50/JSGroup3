/**
 * Created by Roman on 20.08.2015.
 */
module.exports = function(app){
    app.get('/user', function(req, res, next){
        console.log(req.myVar);
        res.status(200).send(req.ip);
    });
    app.post('/user', function(req, res, next){
        res.status(200).send(req.body);
    });
};