
var UserHandler = function (app) {

    var User = app.get('PostGre').Models.User;

    this.create = function (req, res, next) {

        var body = req.body;

        User
            .forge()
            .save(body)
            .then(function (user) {
                res.status(200).send(user);
            })
            .otherwise(next);
    };

    this.remove = function (req, res, next) {

        var id = req.params.id;

        User
            .forge({id: id})
            .fetch()
            .destroy(function (user) {
                res.status(200).send(user);
            })
            .otherwise(next);
    };

    this.getAll = function (req, res, next) {

        User
            .fetchAll()
            .then(function (users) {
                res.status(200).send(users);
            })
            .otherwise(next)
    }

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
};

module.exports = UserHandler;
