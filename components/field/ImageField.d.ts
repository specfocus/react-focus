import PropTypes from 'prop-types';
import { PublicFieldProps, InjectedFieldProps } from './types';
export interface ImageFieldProps extends PublicFieldProps, InjectedFieldProps {
    src?: string;
    title?: string;
    classes?: object;
}
declare const ImageField: {
    (props: ImageFieldProps): JSX.Element;
    displayName: string;
    defaultProps: {
        addLabel: boolean;
    };
    propTypes: {
        src: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
        addLabel: PropTypes.Requireable<boolean>;
        sortBy: PropTypes.Requireable<string>;
        sortByOrder: PropTypes.Requireable<"ASC" | "DESC">;
        source: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        sortable: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        cellClassName: PropTypes.Requireable<string>;
        headerClassName: PropTypes.Requireable<string>;
        textAlign: PropTypes.Requireable<"right" | "left" | "inherit" | "center" | "justify">;
        emptyText: PropTypes.Requireable<string>;
    };
};
export default ImageField;
