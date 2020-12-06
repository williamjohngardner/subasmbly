'use strict';

/** Subassembly Schema */

const mongoose = require('mongoose');

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

const subassemblySchema = mongoose.Schema({
    subassemblyName: { type: String },
    subassemblyNumber: { type: String },
    description: { type: String },
    category: { type: String }, // Foreign Key to Category Model
    subCategory: { type: String }, // Foreign Key to subCategory Model
    parts: { type: [partSchema]},
    subassemblies: { type: [subassemblySchema] },
    uom: { type: String },
    unitCost: { type: Number },
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
