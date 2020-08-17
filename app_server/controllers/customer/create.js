/* jslint node: true, nomen: true */
'use strict';

const Customer = require('../../models/customer.js');

const create = function (req, res, next) {
  let customer = new Customer(req.body);
  customer.save().then(function (result) {
      res.status(200);
      res.json(result);
      return next();
    }).catch(function (err) {
      console.error(err);
  });
};

module.exports = create;