/* jslint node: true, nomen: true */
'use strict';

const mongoose = require('mongoose');
const part = mongoose.model('Part');

const remove = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports = remove;