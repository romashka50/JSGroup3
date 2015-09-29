
var UserHandler = function (app) {

    var Post = app.get('seq').Models.Post;

    this.create = function (req, res, next) {

        var body = req.body;

        Post
            .forge()
            .save(body)
            .then(function (post) {
                res.status(200).send(post);
            })
            .otherwise(next);
    };

    this.remove = function (req, res, next) {

        var id = req.params.id;

        Post
            .forge({id: id})
            .fetch()
            .destroy(function (post) {
                res.status(200).send(post);
            })
            .otherwise(next);
    };

    this.getAll = function (req, res, next) {

        Post
            .fetchAll()
            .then(function (posts) {
                res.status(200).send(posts);
            })
            .otherwise(next)
    };

    this.getOne = function (req, res, next) {
        var id = req.params.id;

        Post
            .forge({id: id})
            .fetch({
                withRelated: ['author']
            })
            .then(function (post) {
                res.status(200).send(post);
            })
            .otherwise(function(err){

                next(err);
            })
    };
};

module.exports = UserHandler;
