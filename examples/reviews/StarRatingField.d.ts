/// <reference types="react" />
import { FieldProps } from 'react-admin';
interface OwnProps {
    size?: 'large' | 'small';
}
declare const StarRatingField: {
    ({ record, size }: FieldProps & OwnProps): JSX.Element | null;
    defaultProps: {
        label: string;
        source: string;
        addLabel: boolean;
    };
};
export default StarRatingField;
