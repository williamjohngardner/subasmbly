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
    subassemblyName: {
        type: String,
        required: true,
    }
});

const assemblySchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    assemblyName: {
        type: String,
        required: true,
    }
});

const projectSchema = mongoose.Schema({
    projectName: { type: String },
    projectNumber: { type: String },
    description: { type: String },
    category: { type: String }, // Foreign Key to Category Model
    subCategory: { type: String }, // Foreign Key to subCategory Model
    parts: { type: [partSchema] },
    subassemblies: { type: [subassemblySchema] },
    assemblies: { type: [assemblySchema] },
    projectCost: { type: Number },
    projectPrice: { type: Number },
    _dateCreated: {
        type: Date,
        default: Date.now
    },
    _dateUpdated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('project', projectSchema);