/* jslint node: true, nomen: true */
'use strict';

const Finish = require('../../models/finish.js');

const create = function (req, res, next) {
  let finish = new Finish(req.body);
  finish.save().then(function (result) {
      res.status(200);
      res.json(result);
      return next();
    }).catch(function (err) {
      console.error(err);
  });
};

module.exports = create;