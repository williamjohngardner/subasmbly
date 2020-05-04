/* jslint node: true, nomen: true */
'use strict';

const Part = require('../../models/part.js');

const get = function (req, res) {
    Part.find()
        .then(function (doc) {
            res.status(200);
            res.send(doc);
        }).catch(function (err) {
            console.error(err);
        })
};

module.exports = get;
