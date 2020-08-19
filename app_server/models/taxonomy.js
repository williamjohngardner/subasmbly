'use strict';

/** Taxonomy Schema */

const mongoose = require('mongoose');

const taxonomySchema = mongoose.Schema({
    taxonomyName: { type: String },
    type: { type: String },
    _dateCreated: {
        type: Date,
        default: Date.now
    },
    _dateUpdated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('taxonomy', taxonomySchema);
