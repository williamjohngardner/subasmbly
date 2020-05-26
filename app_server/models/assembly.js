'use strict';

/** Assembly Schema */

const mongoose = require('mongoose');

const partSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    partName: {
        type: String,
        required: true,
    }
});

const subassemblySchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    partName: {
        type: String,
        required: true,
    }
});

const assemblySchema = mongoose.Schema({
    assemblyName: { type: String },
    assemblyNumber: { type: String },
    description: { type: String },
    category: { type: String }, // Foreign Key to Category Model
    subCategory: { type: String }, // Foreign Key to subCategory Model
    parts: { type: [partSchema] },
    subassemblies: { type: [subassemblySchema] },
    uom: { type: String },
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

module.exports = mongoose.model('assembly', assemblySchema);