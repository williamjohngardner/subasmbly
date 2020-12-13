'use strict';

/** Subcategory Schema */

const mongoose = require('mongoose');

const subCategorySchema = mongoose.Schema({
    subCategoryName: { type: String },
    subCategoryNumber: { type: Number },
    _dateCreated: {
        type: Date,
        default: Date.now
    },
    _dateUpdated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('subcategory', subCategorySchema);
