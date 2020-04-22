/* jslint node: true, nomen: true */
'use strict';

// Supply API Functions
const get = require('../controllers/supply/get');
const getById = require('../controllers/supply/getById');
const create = require('../controllers/supply/create');
const modify = require('../controllers/supply/modify');
const remove = require('../controllers/supply/remove');

// Group library functions into one object.
const supply = {
    get: get,
    getById: getById,
    create: create,
    modify: modify,
    remove: remove
};

module.exports = supply;
