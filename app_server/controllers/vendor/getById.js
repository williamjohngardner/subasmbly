/* jslint node: true, nomen: true */
'use strict';

const Vendor = require('../../models/vendor.js');

const getById = function (req, res) {
    Vendor.findById(req.params.id).then(function (doc) {
        res.status(200);
        res.send(doc);
    }).catch(function (err) {
        console.error(err);
    })
};

module.exports = getById;
