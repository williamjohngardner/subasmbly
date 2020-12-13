'use strict';

/** Assembly Schema */

const mongoose = require('mongoose');
const Subassembly = require('../models/subassembly');

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
    assemblyName: { type: String },
    assemblyNumber: { type: String },
    description: { type: String },
    // category: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: category
    // },
    // subCategory: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: subcategory
    // },
    parts: { type: [partSchema] },
    subassemblies: { type: [subassemblySchema] },
    uom: { type: String },
    unitCost: { type: Number },
    unitCostCurrency: { type: String },
    unitMarkup: { type: Number },
    unitPrice: { type: Number },
    unitPriceCurrency: { type: String },
    _dateCreated: {
        type: Date,
        default: Date.now
    },
    _dateUpdated: {
        type: Date,
        default: Date.now
    }
})

assemblySchema.pre('save', async function calculateCost () {
    let totalCost = 0;
    for (const sub in assemblySchema.subassemblies) {
        const id = sub._id;
        const subassembly = this.Subassembly.findById(id).exec();
        // const cost = subassembly.cost;
        console.log('***** SUBASSEMBLY *****', subassembly);
        // totalCost += cost;
    }
    // console.log('***** TOTAL COST: ', totalCost);
})

module.exports = mongoose.model('assembly', assemblySchema);
