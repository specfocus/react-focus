/// <reference types="react" />
import { FieldProps } from '../../app';
import { Customer } from '../types';
declare const CustomerLinkField: {
    (props: FieldProps<Customer>): JSX.Element | null;
    defaultProps: {
        source: string;
        addLabel: boolean;
    };
};
export default CustomerLinkField;
