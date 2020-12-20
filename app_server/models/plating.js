'use strict';

/** Assembly Schema */

const mongoose = require('mongoose');

const platingSchema = mongoose.Schema({
    platingName: { type: String },
    platingNumber: { type: String },
    description: { type: String },
    category: {
        type: String,
        required: false
    },
    subCategory: {
        type: String,
        required: false
    },
    unitCost: { type: Number },
    unitPrice: { type: Number },
    _dateCreated: {
        type: Date,
        default: Date.now
    },
    _dateUpdated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('plating', platingSchema);
