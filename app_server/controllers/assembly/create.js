/* jslint node: true, nomen: true */
'use strict';

const Assembly = require('../../models/assembly.js');

const create = function (req, res, next) {
  console.log('REQ AT ASSEMBLY', req.body);
  let assembly = new Assembly(req.body);
  assembly.save().then(function (result) {
      res.status(200);
      res.json(result);
      return next();
    }).catch(function (err) {
      console.error(err);
  });
};

module.exports = create;