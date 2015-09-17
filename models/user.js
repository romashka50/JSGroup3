var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema({
    id: false,
    _id: Number,
    name: {
        first: {type: String, default: 'Ivan'},
        last: {type: String, default: 'Pupkin'}
    },
    dateOfBirth: {type: Date, default: Date.now},
    posts: [{type: Number, ref: 'post'}],
    age: Number
}, {collection: 'User', version: false});

var PostSchema = Schema({
    _id: Number,
    name: String
}, {collection: 'Post'});

UserSchema.pre('save', function(next){
    var dOb = this.dateOfBirth;

    this.age = (new Date() - new Date(dOb)) / 1000 / 60 / 60 / 24;

    next();
});

UserSchema.virtual('fullName').get(function(){
    return this.name.first + ' ' + this.name.last
});



UserSchema.set('toJSON', { virtuals: true });

mongoose.schemas = {};
mongoose.schemas.User = UserSchema;
mongoose.schemas.Post = PostSchema;

