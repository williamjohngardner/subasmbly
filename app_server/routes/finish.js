/* jslint node: true, nomen: true */
'use strict';

// Finish API Functions
const get = require('../controllers/finish/get');
const getById = require('../controllers/finish/getById');
const create = require('../controllers/finish/create');
const modify = require('../controllers/finish/modify');
const remove = require('../controllers/finish/remove');

// Group library functions into one object.
const finishs = {
    get: get,
    getById: getById,
    create: create,
    modify: modify,
    remove: remove
};

module.exports = finishs;
