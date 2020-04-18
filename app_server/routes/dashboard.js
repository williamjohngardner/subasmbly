/* jslint node: true, nomen: true */
'use strict';

// Dashboard API Functions
const get = require('../controllers/dashboard/get');

// Group library functions into one object.
const dashboard = {
    get: get
};

module.exports = dashboard;
