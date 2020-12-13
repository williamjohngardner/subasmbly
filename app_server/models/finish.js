'use strict';

/** Finish Schema */

const mongoose = require('mongoose');

const finishSchema = mongoose.Schema({
    finishName: { type: String },
    finishNumber: { type: String },
    description: { type: String },
    // category: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: category
    // },
    // subCategory: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: subcategory
    // },
    _dateCreated: {
        type: Date,
        default: Date.now
    },
    _dateUpdated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('finish', finishSchema);
