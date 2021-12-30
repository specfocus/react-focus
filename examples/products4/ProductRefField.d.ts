/// <reference types="react" />
import { FieldProps } from '../../app';
import { Product } from '../../data/db/types';
declare const ProductRefField: {
    ({ record }: FieldProps<Product>): JSX.Element | null;
    defaultProps: {
        source: string;
        label: string;
    };
};
export default ProductRefField;
