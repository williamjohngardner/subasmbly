'use strict';

/** Customer Schema */

const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    name: { type: String },    
    contact: { type: String },
    contactPhone: { type: String },
    contactEmail: { type: String },
    address: { type: String},
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
    // should have some type of forengn key to associated projectsy by project id
})

module.exports = mongoose.model('customer', customerSchema);
