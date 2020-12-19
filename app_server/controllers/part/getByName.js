/* jslint node: true, nomen: true */
'use strict';

const Part = require('../../models/part.js');

const getByName = function (req, res) {
    Part.findOne(req.query).then(function (doc) {
        res.status(200);
        res.send(doc);
    }).catch(function (err) {
        console.error(err);
    })
};

module.exports = getByName;