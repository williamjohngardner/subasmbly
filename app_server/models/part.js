'use strict';

/** Part Schema */

const mongoose = require('mongoose');

const partSchema = mongoose.Schema({
    partName: { type: String },
    partNumber: { type: String },
    description: { type: String },
    category: { type: String }, // Foreign Key to Category Model
    subCategory: { type: String }, // Foreign Key to subCategory Model
    // purchasedPart: {
    //     purchased: { type: Boolean },
    //     manufacturer: { type: String },
    //     mfgPn: { type: String },
    //     purchasePrice: { type: Number },
    //     uom: { type: String },
    //     url: { type: String },
    //     vendor: { type: String }
    // },
    // dimension: {
    //     length: { type: String },
    //     width: { type: String },
    //     height: { type: String },
    //     circumference: { type: String },
    //     weight: { 
    //         weight: { type: String },
    //         uom: { type: String }
    //     }
    // },
    material: { type: String },
    finish: { type: String }, // Foreign Key to Finish Model
    plating: { type: String }, // Foreign Key to Plating Model\
    uom: { type: String },
    unitCost: { type: Number },
    unitPrice: { type: Number },
    // notes: {
    //     body: { type: String }
    // },
    _dateCreated: {
        type: Date,
        default: Date.now
    },
    _dateUpdated: {
        type: Date,
        default: Date.now
    },
    // partDrawing: THESE SHOULD BE MAP TYPES MAPPED TO AN AWS S3
    // attachments: THESE SHOULD BE MAP TYPES MAPPED TO AN AWS S3
    // partImage: THESE SHOULD BE MAP TYPES MAPPED TO AN AWS S3
})

module.exports = mongoose.model('part', partSchema);
