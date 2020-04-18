/* jslint node: true, nomen: true */
'use strict';

// Projects API Functions
const get = require('../controllers/projects/get');
const getById = require('../controllers/projects/getById');
const create = require('../controllers/projects/create');
const modify = require('../controllers/projects/modify');
const remove = require('../controllers/projects/remove');

// Group library functions into one object.
const projects = {
    get: get,
    getById: getById,
    create: create,
    modify: modify,
    remove: remove
};

module.exports = projects;
