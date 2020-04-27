'use strict';

/** Piece Part Schema */

const part = (function () {
    const mongoose = require('mongoose');

    const partSchema = new mongoose.Schema({
        _id: mongoose.ObjectId,
        // _dateCreated: {
        //     type: Date,
        //     default: Date.now
        // },
        // _dateUpdated: {
        //     type: Date,
        //     default: Date.now
        // },
        partName: { type: String },
        // partNumber: { type: String },
        // description: { type: String },
        // catagory: { type: String }, // Foreign Key to Category Model
        // subCategory: { type: String }, // Foreign Key to subCategory Model
        // purchasedPart: {
        //     purchased: { type: Boolean },
        //     manufacturer: { type: String },
        //     mfgPn: { type: String },
        //     purchasePrice: { type: Number },
        //     uom: { type: String },
        //     url: { type: String },
        //     vendor: { type: String }
        // },
        // dimension: {
        //     length: { type: String },
        //     width: { type: String },
        //     height: { type: String },
        //     circumference: { type: String },
        //     weight: { 
        //         weight: { type: String },
        //         uom: { type: String }
        //     }
        // },
        // material: { type: String },
        // finish: { type: String }, // Foreign Key to Finish Model
        // plating: { type: String }, // Foreign Key to Plating Model\
        // uom: { type: String },
        // unitCost: { type: Number },
        // unitPrice: { type: Number },
        // notes: {
        //     body: { type: String }
        // },
        // partDrawing: mongoose.Mixed, Probably not correct to store files, AWS S3?
        // attachments: mongoose.Mixed, Probably not correct to store files, AWS S3?
        // partImage: mongoose.Mixed Probably not correct to store files, AWS S3?
    })
    
    const Part = mongoose.model('Part', partSchema);
});

module.exports = part;