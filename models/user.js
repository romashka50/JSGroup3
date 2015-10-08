var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: {
        first: {type: String, default: 'Ivan'},
        last: {type: String, default: 'Pupkin'}
    },
    dateOfBirth: {type: Date, default: Date.now},
    posts: [{type: Number, ref: 'post'}],
    age: Number
});

var PostSchema = Schema({
    _id: Number,
    name: String
});

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
