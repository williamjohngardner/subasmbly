/* jslint node: true, nomen: true */
'use strict';

const Subassembly = require('../../models/subassembly.js');

const get = function (req, res) {
    console.log('REQ: ', req);
    Subassembly.find(req).then(function (doc) {
        res.status(200);
        res.send(doc);
    }).catch(function (err) {
        console.error(err);
    })
};

module.exports = get;