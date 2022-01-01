declare const _default: (db: any, { serializeDate }: {
    serializeDate: any;
}) => {
    id: number;
    reference: any;
    date: string | Date;
    customer_id: any;
    basket: {
        product_id: any;
        quantity: number;
    }[];
    total_ex_taxes: number;
    delivery_fees: number;
    tax_rate: any;
    taxes: number;
    total: number;
    status: any;
    returned: boolean;
}[];
export default _default;
