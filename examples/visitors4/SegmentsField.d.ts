/// <reference types="react" />
import { FieldProps } from '../../app';
import { Customer } from '../db/types';
declare const SegmentsField: {
    ({ record }: FieldProps<Customer>): JSX.Element;
    defaultProps: {
        addLabel: boolean;
        source: string;
    };
};
export default SegmentsField;
