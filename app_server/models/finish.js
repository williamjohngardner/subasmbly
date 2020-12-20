'use strict';

/** Finish Schema */

const mongoose = require('mongoose');

const finishSchema = mongoose.Schema({
    finishName: { type: String },
    finishNumber: { type: String },
    description: { type: String },
    category: {
        type: String,
        required: false
    },
    subCategory: {
        type: String,
        required: false
    },
    _dateCreated: {
        type: Date,
        default: Date.now
    },
    _dateUpdated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('finish', finishSchema);
