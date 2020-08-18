/* jslint node: true, nomen: true */
'use strict';

const Integration = require('../../models/integration.js');

const get = function (req, res) {
    Integration.find().exec() //.exec() makes this "thenable"?
        .then(doc => {
            res.status(200);
            res.send(doc);
        }).catch(err => console.error(err))
};

module.exports = get;
