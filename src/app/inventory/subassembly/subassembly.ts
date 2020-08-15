export interface Subassembly {
    subassemblyName: string;
    subassemblyNumber: string;
    description: string;
    category: string;
    subCategory: string;
    parts: [
        {
            partName: string;
            _id: string;
        }
    ];
    uom: string;
    unitCost: string;
    unitPrice: string;
    _dateCreated: string;
    _dateUpdated: string;
}