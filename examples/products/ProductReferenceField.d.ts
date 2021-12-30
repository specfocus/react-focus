/// <reference types="react" />
import { ReferenceFieldProps } from '../../app';
interface Props {
    source?: string;
}
declare const ProductReferenceField: {
    (props: Props & Omit<Omit<ReferenceFieldProps, 'source'>, 'reference' | 'children'>): JSX.Element;
    defaultProps: {
        source: string;
        addLabel: boolean;
    };
};
export default ProductReferenceField;
