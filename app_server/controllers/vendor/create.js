/* jslint node: true, nomen: true */
'use strict';

const Vendor = require('../../models/vendor.js');

const create = function (req, res, next) {
  let vendor = new Vendor(req.body);
  vendor.save().then(function (result) {
      res.status(200);
      res.json(result);
      return next();
    }).catch(function (err) {
      console.error(err);
  });
};

module.exports = create;