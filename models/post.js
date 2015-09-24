module.exports = function (postGre) {

    var UserModel = postGre.Model.extend({
        tableName: 'posts',

        author: function () {
            return this.belongsTo(postGre.Models.User);
        }
        /*,

        toJSON: function () {
            var attributes = postGre.Model.prototype.toJSON.call(this);
            if (attributes.id) {
                attributes['author'] = attributes.author.first + ' ' + attributes.author.last;
            }
            return attributes;
        }*/
    });

    return UserModel;
};