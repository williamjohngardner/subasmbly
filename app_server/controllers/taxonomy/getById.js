/* jslint node: true, nomen: true */
'use strict';

const Taxonomy = require('../../models/taxonomy.js');

const getById = function (req, res) {
    Taxonomy.findById(req.params.id).then(function (doc) {
        res.status(200);
        res.send(doc);
    }).catch(function (err) {
        console.error(err);
    })
};

module.exports = getById;
