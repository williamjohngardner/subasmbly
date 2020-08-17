/* jslint node: true, nomen: true */
'use strict';

const Vendor = require('../../models/vendor.js');

const get = function (req, res) {
    Vendor.find().exec() //.exec() makes this "thenable"?
        .then(doc => {
            res.status(200);
            res.send(doc);
        }).catch(err => console.error(err))
};

module.exports = get;
