/* jslint node: true, nomen: true */
'use strict';

const mongoose = require('mongoose');

const create = function (req, res, next) {
  const update = req.body;
  mongoose.model('subassembly').findByIdAndUpdate(req.params.id, update, function (err, data) {
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