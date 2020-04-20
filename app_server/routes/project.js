/* jslint node: true, nomen: true */
'use strict';

// Projects API Functions
const get = require('../controllers/project/get');
const getById = require('../controllers/project/getById');
const create = require('../controllers/project/create');
const modify = require('../controllers/project/modify');
const remove = require('../controllers/project/remove');

// Group library functions into one object.
const projects = {
    get: get,
    getById: getById,
    create: create,
    modify: modify,
    remove: remove
};

module.exports = projects;
