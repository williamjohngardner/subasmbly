/* jslint node: true, nomen: true */
'use strict';

const Taxonomy = require('../../models/taxonomy.js');

const create = function (req, res, next) {
  let taxonomy = new Taxonomy(req.body);
  taxonomy.save().then(function (result) {
      res.status(200);
      res.json(result);
      return next();
    }).catch(function (err) {
      console.error(err);
  });
};

module.exports = create;