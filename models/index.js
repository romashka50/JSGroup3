module.exports = function (pgSequelize) {
    'use strict';

    this.User = require('./user')(pgSequelize);
    this.Post = require('./post')(pgSequelize);

};