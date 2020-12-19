'use strict';

/** Category Schema */

const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    // TODO:
    // SHOULD CATEGORIES AND SUBCATEGORIES BE PROJECT SPECIFIC?
    categoryName: { type: String },
    categoryNumber: { type: Number },
    _dateCreated: {
        type: Date,
        default: Date.now
    },
    _dateUpdated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('category', categorySchema);
