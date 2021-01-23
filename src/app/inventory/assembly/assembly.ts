export interface Assembly {
    name: string;
    assemblyNumber: string;
    description: string;
    category: string;
    subCategory: string;
    parts: [
        {
            name: string;
            _id: string;
        }
    ];
    subassemblies: [
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
