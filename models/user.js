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

        }
    });

    return UserModel;
};