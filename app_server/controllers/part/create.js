/* jslint node: true, nomen: true */
'use strict';

const Part = require('../../models/part.js');

const create = function (req, res, next) {
  let part = new Part(req.body);
  part.save()
    .then(function (result) {
      res.status(200);
      res.json(result);
      return next();
    }).catch(next);
};

module.exports = create;