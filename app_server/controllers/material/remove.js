/* jslint node: true, nomen: true */
'use strict';

const Material = require('../../models/material.js');

const remove = function (req, res) {
    Material.deleteOne({ _id: req.params.id }).then(function (doc) {
        res.status(200);
        res.send(doc);
        return next(doc);
    }).catch(function (err) {
        console.error(err);
    });
};

module.exports = remove;
