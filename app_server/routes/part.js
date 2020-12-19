/* jslint node: true, nomen: true */
'use strict';

// Parts API Functions
const get = require('../controllers/part/get');
const getByName = require('../controllers/part/getByName');
const getById = require('../controllers/part/getById');
const create = require('../controllers/part/create');
const modify = require('../controllers/part/modify');
const remove = require('../controllers/part/remove');

// Group library functions into one object.
const parts = {
    get: get,
    getByName: getByName,
    getById: getById,
    create: create,
    modify: modify,
    remove: remove
};

module.exports = parts;
