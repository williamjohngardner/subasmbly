/* jslint node: true, nomen: true */
'use strict';

const Finish = require('../../models/finish.js');

const remove = function (req, res) {
    Finish.deleteOne({ _id: req.params.id }).then(function (doc) {
        res.status(200);
        res.send(doc);
        return next(doc);
    }).catch(function (err) {
        console.error(err);
    });
};

module.exports = remove;
