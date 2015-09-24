module.exports = function (postGre) {
    'use strict';

    this.User = require('./user')(postGre);
    this.Post = require('./post')(postGre);

};