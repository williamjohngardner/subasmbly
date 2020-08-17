/* jslint node: true, nomen: true */
'use strict';

// Vendor API Functions
const get = require('../controllers/vendor/get');
const getById = require('../controllers/vendor/getById');
const create = require('../controllers/vendor/create');
const modify = require('../controllers/vendor/modify');
const remove = require('../controllers/vendor/remove');

// Group library functions into one object.
const vendors = {
    get: get,
    getById: getById,
    create: create,
    modify: modify,
    remove: remove
};

module.exports = vendors;
