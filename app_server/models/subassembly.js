'use strict';

/** Subassembly Schema */

const mongoose = require('mongoose');

const partSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true *** commented out until I can make the UI changes to accomodate this
    required: false
  },
  partName: {
    type: String,
    required: true,
  }
});

const subassemblySubSchema = mongoose.Schema({
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
  subassemblyName: {
    type: String,
    required: true
  },
  subassemblyNumber: {
    type: String,
    required: true
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
    type: [subassemblySubSchema],
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
    // required: true *** commented out until I can make the UI changes to accomodate this
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

module.exports = mongoose.model('subassembly', subassemblySchema);
