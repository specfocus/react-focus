/// <reference types="react" />
import { ReferenceFieldProps } from '../../app';
declare const CustomerReferenceField: {
    (props: Omit<ReferenceFieldProps, 'reference' | 'children' | 'source'> & {
        source?: string;
    }): JSX.Element;
    defaultProps: {
        source: string;
        addLabel: boolean;
    };
};
export default CustomerReferenceField;
