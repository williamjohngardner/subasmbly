/* jslint node: true, nomen: true */
'use strict';

const Assembly = require('../../models/assembly.js');

const modify = function (req, res, next) {
  const update = req.body;
  Assembly.findByIdAndUpdate(req.params.id, update, function (err, data) {
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