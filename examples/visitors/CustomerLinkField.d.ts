/// <reference types="react" />
import { FieldProps } from '../../app';
import { Customer } from '../db/types';
declare const CustomerLinkField: {
    (props: FieldProps<Customer>): JSX.Element;
    defaultProps: {
        source: string;
        addLabel: boolean;
    };
};
export default CustomerLinkField;
