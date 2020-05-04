/* jslint node: true, nomen: true */
'use strict';

const mongoose = require('mongoose');
const Part = require('../../models/part.js');

const create = function (req, res, next) {
  let update = req.body;
  // let part = new Part();
  mongoose.model('part').findByIdAndUpdate(req.params.id, update, function (err, data) {
    if (err) {
      console.error('ERROR', err);
      return
    } else {
      return
    };
  }).then(function (result) {
    res.status(200);
    res.json(result);
    return next();
  }).catch(next);
};

module.exports = create;