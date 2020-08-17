/* jslint node: true, nomen: true */
'use strict';

const Customer = require('../../models/customer.js');

const get = function (req, res) {
    Customer.find().exec() //.exec() makes this "thenable"?
        .then(doc => {
            res.status(200);
            res.send(doc);
        }).catch(err => console.error(err))
};

module.exports = get;
