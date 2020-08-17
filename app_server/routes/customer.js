/* jslint node: true, nomen: true */
'use strict';

// Customer API Functions
const get = require('../controllers/customer/get');
const getById = require('../controllers/customer/getById');
const create = require('../controllers/customer/create');
const modify = require('../controllers/customer/modify');
const remove = require('../controllers/customer/remove');

// Group library functions into one object.
const customers = {
    get: get,
    getById: getById,
    create: create,
    modify: modify,
    remove: remove
};

module.exports = customers;
