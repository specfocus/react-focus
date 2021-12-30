/// <reference types="react" />
import { InputProps } from '../../app';
interface Props extends Omit<InputProps, 'source'> {
    source?: string;
}
declare const SegmentsInput: {
    ({ addField, ...rest }: Props): JSX.Element;
    defaultProps: {
        addField: boolean;
        source: string;
        resource: string;
    };
};
export default SegmentsInput;
