/// <reference types="react" />
import { FieldProps } from '../../app';
import { Customer } from '../types';
declare const SegmentsField: {
    ({ record }: FieldProps<Customer>): JSX.Element | null;
    defaultProps: {
        addLabel: boolean;
        source: string;
    };
};
export default SegmentsField;
