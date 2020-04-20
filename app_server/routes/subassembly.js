/* jslint node: true, nomen: true */
'use strict';

// Subassemblies API Functions
const get = require('../controllers/subassembly/get');
const getById = require('../controllers/subassembly/getById');
const create = require('../controllers/subassembly/create');
const modify = require('../controllers/subassembly/modify');
const remove = require('../controllers/subassembly/remove');

// Group library functions into one object.
const subassemblies = {
    get: get,
    getById: getById,
    create: create,
    modify: modify,
    remove: remove
};

module.exports = subassemblies;
