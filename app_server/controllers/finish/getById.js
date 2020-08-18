/* jslint node: true, nomen: true */
'use strict';

const Finish = require('../../models/finish.js');

const getById = function (req, res) {
    Finish.findById(req.params.id).then(function (doc) {
        res.status(200);
        res.send(doc);
    }).catch(function (err) {
        console.error(err);
    })
};

module.exports = getById;
