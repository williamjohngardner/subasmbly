/* jslint node: true, nomen: true */
'use strict';

// const mongoose = require('mongoose');
const Part = require('../../models/part.js');

const create = function (req, res, next) {
    console.log('REQ:', req.body);
    let part = new Part(req.body);
    part.save().then(function (result) {
        res.status(200);
        res.json(result);
        return next();
      }).catch(function(err) {
          console.error(err);
      });
};

module.exports = create;