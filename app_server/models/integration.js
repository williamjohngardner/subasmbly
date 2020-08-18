'use strict';

/** Integration Schema */

const mongoose = require('mongoose');

const integrationSchema = mongoose.Schema({
    integrationName: { type: String },
    url: { type: String },
    description: { type: String },
    category: { type: String }, // Foreign Key to Category Model
    subCategory: { type: String }, // Foreign Key to subCategory Model
    _dateCreated: {
        type: Date,
        default: Date.now
    },
    _dateUpdated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('integration', integrationSchema);
