/* jslint node: true, nomen: true */
'use strict';

// Taxonomy API Functions
const get = require('../controllers/taxonomy/get');
const getById = require('../controllers/taxonomy/getById');
const create = require('../controllers/taxonomy/create');
const modify = require('../controllers/taxonomy/modify');
const remove = require('../controllers/taxonomy/remove');

// Group library functions into one object.
const taxonomy = {
    get: get,
    getById: getById,
    create: create,
    modify: modify,
    remove: remove
};

module.exports = taxonomy;
