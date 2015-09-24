module.exports = function (postGre) {

    var UserModel = postGre.Model.extend({
        tableName: 'users',

        posts: function () {
            return this.hasMany(postGre.Models.Post, 'user_id');
        },

        initialize: function () {
            this.on('destroying', this.removeAllDependencies);
        },

        removeAllDependencies: function (model) {
            postGre.Models.Post
                .query(function (qb) {
                    qb.where('user_id', '=', model.id);
                })
                .fetchAll()
                .then(function (posts) {
                    for (var i = posts.length - 1; i >= 0; i--) {
                        posts.models[i]
                            .destroy()
                            .then()
                            .otherwise(function (err) {
                                console.log('err on delete user posts: ' + err);
                            })
                    }
                });
        }
    });

    return UserModel;
};