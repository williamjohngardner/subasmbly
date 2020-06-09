/* jslint node: true, nomen: true */
'use strict';

const Project = require('../../models/project.js');

const create = function (req, res, next) {
  let project = new Project(req.body);
  project.save().then(function (result) {
      res.status(200);
      res.json(result);
      return next();
    }).catch(function (err) {
      console.error(err);
  });
};

module.exports = create;