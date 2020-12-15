/* jslint node: true, nomen: true */
'use strict';

const Subassembly = require('../../models/subassembly.js');

const getByName = function (req, res) {
    let subassembly = new Subassembly(req.body);
    console.log('REQ: ', subassembly);
    subassembly.find().then(function (doc) {
        res.status(200);
        res.send(doc);
    }).catch(function (err) {
        console.error(err);
    })
};

module.exports = getByName;