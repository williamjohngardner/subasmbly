/* jslint node: true, nomen: true */
'use strict';

const User = require('../../models/user.js');

const getById = function (req, res) {
    User.findById(req.params.id).then(function (doc) {
        res.status(200);
        res.send(doc);
    }).catch(function (err) {
        console.error(err);
    })
};

module.exports = getById;
