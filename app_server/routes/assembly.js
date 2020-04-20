/* jslint node: true, nomen: true */
'use strict';

// Assemblies API Functions
const get = require('../controllers/assembly/get');
const getById = require('../controllers/assembly/getById');
const create = require('../controllers/assembly/create');
const modify = require('../controllers/assembly/modify');
const remove = require('../controllers/assembly/remove');

// Group library functions into one object.
const assembly = {
    get: get,
    getById: getById,
    create: create,
    modify: modify,
    remove: remove
};

module.exports = assembly;
