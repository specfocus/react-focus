/// <reference types="react" />
import { FieldProps } from '../../components/field/types';
interface OwnProps {
    size?: 'large' | 'small';
}
declare const StarRatingField: {
    ({ record, size }: FieldProps & OwnProps): JSX.Element;
    defaultProps: {
        label: string;
        source: string;
        addLabel: boolean;
    };
};
export default StarRatingField;
