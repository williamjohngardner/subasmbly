/* jslint node: true, nomen: true */
'use strict';

const Subassembly = require('../../models/subassembly.js');

const remove = function (req, res) {
    Subassembly.deleteOne({ _id: req.params.id }).then(function (doc) {
        res.status(200);
        res.send(doc);
        return next();
    }).catch(function (err) {
        console.error(err);
    });
};

module.exports = remove;
