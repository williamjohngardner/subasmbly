'use strict';

/** Assembly Schema */

const mongoose = require('mongoose');
const Part = require('../models/part');
const Subassembly = require('../models/subassembly');
const Category = require('../models/category');
const SubCategory = require('../models/subcategory');

const partSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    partName: {
        type: String,
        required: true,
    }
});

const subassemblySchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    subassemblyName: {
        type: String,
        required: true,
    }
});

const assemblySchema = mongoose.Schema({
    assemblyName: {
        type: String,
        required: false
    },
    assemblyNumber: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    subCategory: {
        type: String,
        required: false
    },
    parts: {
        type: [partSchema],
        required: false
    },
    subassemblies: {
        type: [subassemblySchema],
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
    _dateCreated: {
        type: Date,
        default: Date.now
    },
    _dateUpdated: {
        type: Date,
        default: Date.now
    }
    // partDrawing: THESE SHOULD BE MAP TYPES MAPPED TO AN AWS S3
    // attachments: THESE SHOULD BE MAP TYPES MAPPED TO AN AWS S3
    // partImage: THESE SHOULD BE MAP TYPES MAPPED TO AN AWS S3
})

assemblySchema.pre('save', async function calculateCost () {
    let totalCost = 0;
    for (const sub in assemblySchema.subassemblies) {
        const subassembly = await this.Subassembly.findById(sub._id).exec();
        // const cost = subassembly.cost;
        console.log('***** SUBASSEMBLY *****', subassembly);
        // totalCost += cost;
    }
    // console.log('***** TOTAL COST: ', totalCost);
})

module.exports = mongoose.model('assembly', assemblySchema);
