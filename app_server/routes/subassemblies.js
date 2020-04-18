/* jslint node: true, nomen: true */
'use strict';

// Subassemblies API Functions
const get = require('../controllers/subassemblies/get');
const getById = require('../controllers/subassemblies/getById');
const create = require('../controllers/subassemblies/create');
const modify = require('../controllers/subassemblies/modify');
const remove = require('../controllers/subassemblies/remove');

// Group library functions into one object.
const subassemblies = {
    get: get,
    getById: getById,
    create: create,
    modify: modify,
    remove: remove
};

module.exports = subassemblies;
