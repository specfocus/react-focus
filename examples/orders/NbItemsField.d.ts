/// <reference types="react" />
import { FieldProps } from '../../app';
import { Order } from '../types';
declare const NbItemsField: {
    ({ record }: FieldProps<Order>): JSX.Element;
    defaultProps: {
        label: string;
        textAlign: string;
    };
};
export default NbItemsField;
