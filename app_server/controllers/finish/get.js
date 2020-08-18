/* jslint node: true, nomen: true */
'use strict';

const Finish = require('../../models/finish.js');

const get = function (req, res) {
    Finish.find().exec() //.exec() makes this "thenable"?
        .then(doc => {
            res.status(200);
            res.send(doc);
        }).catch(err => console.error(err))
};

module.exports = get;
