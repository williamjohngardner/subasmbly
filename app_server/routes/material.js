/* jslint node: true, nomen: true */
'use strict';

// Material API Functions
const get = require('../controllers/material/get');
const getById = require('../controllers/material/getById');
const create = require('../controllers/material/create');
const modify = require('../controllers/material/modify');
const remove = require('../controllers/material/remove');

// Group library functions into one object.
const materials = {
    get: get,
    getById: getById,
    create: create,
    modify: modify,
    remove: remove
};

module.exports = materials;
