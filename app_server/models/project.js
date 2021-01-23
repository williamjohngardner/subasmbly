'use strict';

/** Assembly Schema */

const mongoose = require('mongoose');

const partSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    }
});

const subassemblySchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    }
});

const assemblySchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    }
});

const projectSchema = mongoose.Schema({
    name: { type: String },
    projectNumber: { type: String },
    description: { type: String },
    category: {
        type: String,
        required: false
    },
    subCategory: {
        type: String,
        required: false
    },
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
