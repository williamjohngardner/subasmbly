/* jslint node: true, nomen: true */
'use strict';

const Part = require('../../models/part.js');

const remove = function (req, res) {
    Part.deleteOne({ _id: req.params.id }).then(function (doc) {
        res.status(200);
        res.send(doc);
        return next();
    }).catch(function (err) {
        console.error(err);
    });
};

module.exports = remove;
