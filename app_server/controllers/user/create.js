/* jslint node: true, nomen: true */
'use strict';

const User = require('../../models/user.js');

const create = function (req, res, next) {
  let user = new User(req.body);
  user.save().then(function (result) {
      res.status(200);
      res.json(result);
      return next();
    }).catch(function (err) {
      console.error(err);
  });
};

module.exports = create;