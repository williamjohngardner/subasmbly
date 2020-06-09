/* jslint node: true, nomen: true */
'use strict';

const Assembly = require('../../models/assembly.js');

const remove = function (req, res) {
    Assembly.deleteOne({ _id: req.params.id }).then(function (doc) {
        res.status(200);
        res.send(doc);
        return next(doc);
    }).catch(function (err) {
        console.error(err);
    });
};

module.exports = remove;
