/* jslint node: true, nomen: true */
'use strict';

const Material = require('../../models/material.js');

const getById = function (req, res) {
    Material.findById(req.params.id).then(function (doc) {
        res.status(200);
        res.send(doc);
    }).catch(function (err) {
        console.error(err);
    })
};

module.exports = getById;
