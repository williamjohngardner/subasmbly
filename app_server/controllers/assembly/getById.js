/* jslint node: true, nomen: true */
'use strict';

const Assembly = require('../../models/assembly.js');

const getById = function (req, res) {
    Assembly.findById(req.params.id).then(function (doc) {
        res.status(200);
        res.send(doc);
    }).catch(function (err) {
        console.error(err);
    })
};

module.exports = getById;
