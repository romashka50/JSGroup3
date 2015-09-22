var mongoose = require('mongoose');
var UserSchema = mongoose.schemas.User;
var PostSchema = mongoose.schemas.Post;
var _User = mongoose.model('user', UserSchema);
var Post = mongoose.model('post', PostSchema);

var User = function () {
    this.create = function (req, res, next) {
        var body = req.body;

        var user = new _User(body);

        user.save(function (err, user) {
            if (err) {
                return next(err);
            }

            res.status(200).send(user);
        });
    };

    this.remove = function (req, res, next) {
        var id = req.params.id;

        _User.findByIdAndRemove(id, function (err, response) {
            if (err) {
                return next(err);
            }

            res.status(200).send(response);
        });


    };

    this.getAll = function (req, res, next) {
        _User
            .find()
            .populate('posts', '-_id')
            .lean()
            .exec(function (err, response) {
                if (err) {
                    return next(err);
                }

                res.status(200).send(response);
            });
    }
};

module.exports = User;
