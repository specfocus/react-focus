/// <reference types="react" />
import { FieldProps } from '../../app';
import { Product } from '../db/types';
declare const ProductRefField: {
    ({ record }: FieldProps<Product>): JSX.Element;
    defaultProps: {
        source: string;
        label: string;
    };
};
export default ProductRefField;
