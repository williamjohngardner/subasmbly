/* jslint node: true, nomen: true */
'use strict';

const Part = require('../../models/part.js');

const get = function (req, res) {
    Part.find().exec() //.exec() makes this "thenable"?
        .then(doc => {
            res.status(200);
            res.send(doc);
        }).catch(err => console.error(err))
};

module.exports = get;
