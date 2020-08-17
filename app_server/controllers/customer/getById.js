/* jslint node: true, nomen: true */
'use strict';

const Customer = require('../../models/customer.js');

const getById = function (req, res) {
    Customer.findById(req.params.id).then(function (doc) {
        res.status(200);
        res.send(doc);
    }).catch(function (err) {
        console.error(err);
    })
};

module.exports = getById;
