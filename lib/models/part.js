var mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
    _dateCreated: {
        type: Date,
        default: Date.now
    },
    _dateUpdated: {
        type: Date,
        default: Date.now
    },
    partName: { type: String },
    partNumber: { type: String },
    description: { type: String },
    catagory: { type: String }, // Foreign Key to Category Model
    subCategory: { type: String }, // Foreign Key to subCategory Model
    purchasedPart: {
        purchased: Boolean,
        manufacturer: { type: String },
        mfgPn: { type: String },
        purchasePrice: number,
        uom: { type: String },
        url: { type: String },
        vendor: { type: String }
    },
    dimension: { type: String },
    material: { type: String },
    finish: { type: String }, // Foreign Key to Finish Model
    plating: { type: String }, // Foreign Key to Plating Model\
    uom: { type: String },
    unitCost: { type: Number },
    unitPrice: { type: Number },
    // notes: {
    //     body: { type: String }
    // },
    // partDrawing: mongoose.Mixed, Probably not correct to store files, AWS S3?
    // attachments: mongoose.Mixed, Probably not correct to store files, AWS S3?
    // partImage: mongoose.Mixed Probably not correct to store files, AWS S3?
})

const Part = mongoose.model('Part', partSchema);

Part.create({
    partName: 'Wood Screw, ss, #8 x .375',
    partNumber: '34-3456-34-65',
    description: 'Wood Screw',
    catagory: 'hardware',
    subCategory: 'fasteners',
    purchasedPart: {
        purchased: true,
        manufacturer: 'Wood Screw Mfgs',
        mfgPn: '1234RTG76',
        purchasePrice: .35,
        uom: 'ea',
        url: 'https://homedepot.com/woodscrew/?pn=1234RTG76',
        vendor: 'Home Depot'
    },
    dimension: '#8 x .375"',
    material: 'stainless steel',
    finish: 'none', // Foreign Key to Finish Model
    plating: 'none', // Foreign Key to Plating Model\
    uom: 'ea',
    unitCost: .35,
    unitPrice: .50
}, function (err, woodscrew) {
    if (err) return handleError(err);
});

module.exports = partSchema;