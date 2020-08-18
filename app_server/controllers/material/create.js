/* jslint node: true, nomen: true */
'use strict';

const Material = require('../../models/material.js');

const create = function (req, res, next) {
  let material = new Material(req.body);
  material.save().then(function (result) {
      res.status(200);
      res.json(result);
      return next();
    }).catch(function (err) {
      console.error(err);
  });
};

module.exports = create;