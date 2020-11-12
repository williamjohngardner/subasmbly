/* jslint node: true, nomen: true */
'use strict';

const User = require('../../models/user.js');

const get = function (req, res) {
    User.find().exec() //.exec() makes this "thenable"?
        .then(doc => {
            res.status(200);
            res.send(doc);
        }).catch(err => console.error(err))
};

module.exports = get;
