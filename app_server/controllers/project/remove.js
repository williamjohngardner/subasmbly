/* jslint node: true, nomen: true */
'use strict';

const Project = require('../../models/project.js');

const get = function (req, res) {
    Project.deleteOne({ _id: req.params.id }).then(function (doc) {
        res.status(200);
        res.send(doc);
        return next(doc);
    }).catch(function (err) {
        console.error(err);
    });
};

module.exports = get;
