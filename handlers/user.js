
var UserHandler = function (app) {
    this.create = function (req, res, next) {

        var body = req.body;

        var user = new User();

        user
            .save(body)
            .exec(function (err, userModel) {
                if (err) {
                    return next(err);
                }

                res.status(200).send(userModel);
            });

           /* .then(function (user) {
            })
            .otherwise(next);*/
    };

    this.remove = function (req, res, next) {

        var id = req.params.id;

        User
            .forge({id: id})
            .destroy()
            .then(function (user) {
                res.status(200).send(user);
            })
            .otherwise(function(err){
                console.log(err);
                next(err);
            });
    };

    this.getAll = function (req, res, next) {

       /* User
            .fetchAll()
            .then(function (users) {
                res.status(200).send(users);
            })
            .catch(next)*/

        UserCollection
            .forge()
            .fetch()
            .then(function(models){
                res.status(200).send(models);
            })
            .otherwise(function(err){
                next(err);
            })
    };

    this.getOne = function (req, res, next) {
        var id = req.params.id;

        User
            .forge({id: id})
            .fetch()
            .then(function (user) {
                res.status(200).send(user);
            })
            .otherwise(next)
    }

    this.findByName = function(req, res, next) {

        var name = req.params.name;

        User
            .query(function (qb) {
                qb.where('first', name)
            })
            .fetch()
            .exec(function (err, result) {
                if (err) {
                    return next(err);
                }

                res.status(200).send(result);
            })

    }
};

module.exports = UserHandler;
