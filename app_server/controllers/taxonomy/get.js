/* jslint node: true, nomen: true */
'use strict';

const Taxonomy = require('../../models/taxonomy.js');

const get = function (req, res) {
    Taxonomy.find().exec() //.exec() makes this "thenable"?
        .then(doc => {
            res.status(200);
            res.send(doc);
        }).catch(err => console.error(err))
};

module.exports = get;
