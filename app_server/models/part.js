'use strict';

/** Part Schema */

const mongoose = require('mongoose');

const partSchema = mongoose.Schema({
    partName: { type: String },
    partNumber: { type: String },
    description: { type: String },
    category: {
        type: String,
        required: false
    },
    subCategory: {
        type: String,
        required: false
    },
    purchasedPart: {
        purchased: {
            type: Boolean,
            required: false
        },
        manufacturer: {
            type: String,
            required: false
        },
        mfgPn: {
            type: String,
            required: false
        },
        purchasePrice: {
            type: Number,
            required: false
        },
        uom: {
            type: String,
            required: false
        },
        url: {
            type: String,
            required: false
        },
        vendor: {
            type: String,
            required: false
        }
    },
    dimensions: {
        length: {
            type: String,
            required: false
        },
        width: {
            type: String,
            required: false
        },
        height: {
            type: String,
            required: false
        },
        circumference: {
            type: String,
            required: false
        },
        weight: { 
            weight: {
                type: String,
                required: false
            },
            uom: {
                type: String,
                required: false
             }
        }
    },
    material: {
        type: String,
        required: false
    },
    finish: {
        type: String,
        required: false
    },
    plating: {
        type: String,
        required: false
    },
    uom: {
        type: String,
        required: true
    },
    unitCost: {
        type: Number,
        required: true
    },
    unitCostCurrency: {
        type: String,
        required: true
    },
    unitMarkup: {
        type: Number,
        required: false
    },
    unitPrice: {
        type: Number,
        required: false
    },
    unitPriceCurrency: {
        type: String,
        required: false
    },
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
