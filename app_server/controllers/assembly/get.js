/* jslint node: true, nomen: true */
'use strict';

const Assembly = require('../../models/assembly.js');

const get = function (req, res) {
    console.log('QUERY', req.query);
    console.log('REQUEST', req);
    Assembly.find(req.query).then(function (doc) {
        res.status(200);
        res.send(doc);
    }).catch(function (err) {
        console.error(err);
    })
};

module.exports = get;
