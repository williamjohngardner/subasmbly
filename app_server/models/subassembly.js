'use strict';

/** Subassembly Schema */

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
    subassemblyName: { type: String },
    subassemblyNumber: { type: String },
    description: { type: String },
    category: { type: String }, // Foreign Key to Category Model
    subCategory: { type: String }, // Foreign Key to subCategory Model
    parts: { type: [partSchema]},
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

module.exports = mongoose.model('subassembly', subassemblySchema);
