/* jslint node: true, nomen: true */
'use strict';

const Material = require('../../models/material.js');

const get = function (req, res) {
    Material.find().exec() //.exec() makes this "thenable"?
        .then(doc => {
            res.status(200);
            res.send(doc);
        }).catch(err => console.error(err))
};

module.exports = get;
