/* jslint node: true, nomen: true */
'use strict';

const Subassembly = require('../../models/subassembly.js');

const getByName = function (req, res) {
    console.log('REQ: ', req.query);
    Subassembly.findOne(req.query).then(function (doc) {
        res.status(200);
        res.send(doc);
    }).catch(function (err) {
        console.error(err);
    })
};

module.exports = getByName;