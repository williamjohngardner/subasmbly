/* jslint node: true, nomen: true */
'use strict';

const mongoose = require('mongoose');
// const part = mongoose.model('Part');

const create = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};

module.exports = create;