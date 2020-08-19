'use strict';

/** User Schema */

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: { type: String },
    type: { type: String },
    _dateCreated: {
        type: Date,
        default: Date.now
    },
    _dateUpdated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema);
