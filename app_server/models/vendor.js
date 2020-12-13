'use strict';

/** Vendor Schema */

const mongoose = require('mongoose');

const vendorSchema = mongoose.Schema({
    name: { type: String },    
    contact: { type: String },
    contactPhone: { type: String },
    contactEmail: { type: String },
    address: { type: String},
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
    // should have some type of forengn key to associated projectsy by project id
})

module.exports = mongoose.model('vendor', vendorSchema);
