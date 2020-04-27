/* jslint node: true, nomen: true */
'use strict';

// const mongoose = require('mongoose');
const Part = require('../../models/part.js');

const create = function (req, res, next) {
    let part = new Part();
    part.save().then(function (result) {
        res.setHeader('X-TotalCount', 1);
        res.status(200);
        res.json(result);
        return next();
      }).catch(function(err) {
          alert(err);
      });
    // res.status(200);
    // res.json({"status" : "success"});
};

module.exports = create;