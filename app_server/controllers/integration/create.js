/* jslint node: true, nomen: true */
'use strict';

const Integration = require('../../models/integration.js');

const create = function (req, res, next) {
  let integration = new Integration(req.body);
  integration.save().then(function (result) {
      res.status(200);
      res.json(result);
      return next();
    }).catch(function (err) {
      console.error(err);
  });
};

module.exports = create;