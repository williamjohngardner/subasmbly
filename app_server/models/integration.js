'use strict';

/** Integration Schema */

const mongoose = require('mongoose');

const integrationSchema = mongoose.Schema({
    integrationName: { type: String },
    url: { type: String },
    description: { type: String },
    // category: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: category
    // },
    // subCategory: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: subcategory
    // },
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
