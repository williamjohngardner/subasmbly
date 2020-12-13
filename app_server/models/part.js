'use strict';

/** Part Schema */

const mongoose = require('mongoose');

const partSchema = mongoose.Schema({
    partName: { type: String },
    partNumber: { type: String },
    description: { type: String },
    // category: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: category
    // },
    // subCategory: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: subcategory
    // },
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
    // material: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: material
    // },
    // finish: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: finish
    // },
    // plating: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: plating
    // },
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
