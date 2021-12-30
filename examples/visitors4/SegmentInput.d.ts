/// <reference types="react" />
import { InputProps } from '../../app';
interface Props extends Omit<InputProps, 'source'> {
    source?: string;
}
declare const SegmentInput: {
    (props: Props): JSX.Element;
    defaultProps: {
        source: string;
    };
};
export default SegmentInput;
