/* jslint node: true, nomen: true */
'use strict';

// Integration API Functions
const get = require('../controllers/integration/get');
const getById = require('../controllers/integration/getById');
const create = require('../controllers/integration/create');
const modify = require('../controllers/integration/modify');
const remove = require('../controllers/integration/remove');

// Group library functions into one object.
const integrations = {
    get: get,
    getById: getById,
    create: create,
    modify: modify,
    remove: remove
};

module.exports = integrations;
