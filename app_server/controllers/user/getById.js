/* jslint node: true, nomen: true */
'use strict';

const Part = require('../../models/part.js');

const getById = function (req, res) {
    Part.findById(req.params.id).then(function (doc) {
        res.status(200);
        res.send(doc);
    }).catch(function (err) {
        console.error(err);
    })
};

module.exports = getById;
