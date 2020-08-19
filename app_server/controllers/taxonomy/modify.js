/* jslint node: true, nomen: true */
'use strict';

const Taxonomy = require('../../models/taxonomy.js');

const modify = function (req, res, next) {
  const update = req.body;
  Taxonomy.findByIdAndUpdate(req.params.id, update, function (err, data) {
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