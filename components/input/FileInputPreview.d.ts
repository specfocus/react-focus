import { ReactNode } from 'react';
import PropTypes from 'prop-types';
interface Props {
    children: ReactNode;
    className?: string;
    classes?: object;
    onRemove: () => void;
    file: any;
}
declare const FileInputPreview: {
    (props: Props): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<PropTypes.ReactElementLike>;
        className: PropTypes.Requireable<string>;
        file: PropTypes.Requireable<object>;
        onRemove: PropTypes.Validator<(...args: any[]) => any>;
    };
    defaultProps: {
        file: any;
    };
};
export default FileInputPreview;
