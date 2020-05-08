export interface Part {
    _id: string;
    partName: string;
    partNumber: string;
    description: string;
    catagory: string; // Foreign Key to Category Model
    subCategory: string; // Foreign Key to subCategory Model
    purchasedPart: {
        purchased: boolean;
        manufacturer: string;
        mfgPn: string;
        purchasePrice: number;
        uom: string;
        url: string;
        vendor: string
    };
    dimension: {
        length: string;
        width: string;
        height: string;
        circumference: string;
        weight: { 
            weight: string;
            uom: string
        }
    };
    material: string;
    finish: string; // Foreign Key to Finish Model
    plating: string; // Foreign Key to Plating Model\
    uom: string;
    unitCost: number;
    unitPrice: number;
    notes: {
        body: string
    };
    _dateCreated: string;
    _dateUpdated: string;
    // partDrawing: THESE SHOULD BE MAP TYPES MAPPED TO AN AWS S3
    // attachments: THESE SHOULD BE MAP TYPES MAPPED TO AN AWS S3
    // partImage: THESE SHOULD BE MAP TYPES MAPPED TO AN AWS S3
}
