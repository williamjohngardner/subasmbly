/* jslint node: true, nomen: true */
'use strict';

// Purchase API Functions
const get = require('../controllers/purchase/get');
const getById = require('../controllers/purchase/getById');
const create = require('../controllers/purchase/create');
const modify = require('../controllers/purchase/modify');
const remove = require('../controllers/purchase/remove');

// Group library functions into one object.
const purchase = {
    get: get,
    getById: getById,
    create: create,
    modify: modify,
    remove: remove
};

module.exports = purchase;
