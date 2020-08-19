/* jslint node: true, nomen: true */
'use strict';

// User API Functions
const get = require('../controllers/user/get');
const getById = require('../controllers/user/getById');
const create = require('../controllers/user/create');
const modify = require('../controllers/user/modify');
const remove = require('../controllers/user/remove');

// Group library functions into one object.
const user = {
    get: get,
    getById: getById,
    create: create,
    modify: modify,
    remove: remove
};

module.exports = user;
