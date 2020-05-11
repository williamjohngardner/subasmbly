/* jslint node: true, nomen: true */
'use strict';

const Subassembly = require('../../models/subassembly.js');

const modify = function (req, res, next) {
  const update = req.body;
  Subassembly.findByIdAndUpdate(req.params.id, update, function (err, data) {
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

module.exports = modify;