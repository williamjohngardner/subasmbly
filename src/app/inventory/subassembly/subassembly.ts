export interface Subassembly {
    name: string;
    subassemblyNumber: string;
    description: string;
    category: string;
    subCategory: string;
    parts: [
        {
            name: string;
            _id: string;
        }
    ];
    uom: string;
    unitCost: string;
    unitPrice: string;
    _dateCreated: string;
    _dateUpdated: string;
}