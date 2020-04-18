/* jslint node: true, nomen: true */
'use strict';

// Parts API Functions
const get = require('../controllers/parts/get');
const getById = require('../controllers/parts/getById');
const create = require('../controllers/parts/create');
const modify = require('../controllers/parts/modify');
const remove = require('../controllers/parts/remove');

// Group library functions into one object.
const parts = {
    get: get,
    getById: getById,
    create: create,
    modify: modify,
    remove: remove
};

module.exports = parts;
