/* jslint node: true, nomen: true */
'use strict';

const Assembly = require('../../models/assembly.js');

const get = function (req, res) {
    Assembly.find(req.query).then(function (doc) {
        res.status(200);
        res.send(doc);
    }).catch(function (err) {
        console.error(err);
    })
};

module.exports = get;
