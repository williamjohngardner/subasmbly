/* jslint node: true, nomen: true */
'use strict';

const Integration = require('../../models/integration.js');

const remove = function (req, res) {
    Integration.deleteOne({ _id: req.params.id }).then(function (doc) {
        res.status(200);
        res.send(doc);
        return next(doc);
    }).catch(function (err) {
        console.error(err);
    });
};

module.exports = remove;
