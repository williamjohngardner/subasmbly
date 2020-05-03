/* jslint node: true, nomen: true */
'use strict';

// const mongoose = require('mongoose');
const Part = require('../../models/part.js');

const create = function (req, res, next) {
    let query = req.body;
    let part = new Part(req.body);
    part.findOneAndUpdate({ _id: req.params.id }, query).then(function (result) {
        res.status(200);
        res.json(result);
        return next();
      }).catch(next);
};

module.exports = create;