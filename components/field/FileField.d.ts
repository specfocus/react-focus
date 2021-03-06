import PropTypes from 'prop-types';
import { PublicFieldProps, InjectedFieldProps } from './types';
/**
 * Render a link to a file based on a path contained in a record field
 *
 * @example
 * import { FileField } from '../../app';
 *
 * <FileField source="url" title="title" />
 *
 * // renders the record { id: 123, url: 'doc.pdf', title: 'Presentation' } as
 * <div>
 *     <a href="doc.pdf" title="Presentation">Presentation</a>
 * </div>
 */
declare const FileField: {
    (props: FileFieldProps): JSX.Element;
    defaultProps: {
        addLabel: boolean;
    };
    propTypes: {
        src: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
        target: PropTypes.Requireable<string>;
        download: PropTypes.Requireable<string | boolean>;
        ping: PropTypes.Requireable<string>;
        rel: PropTypes.Requireable<string>;
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
export interface FileFieldProps extends PublicFieldProps, InjectedFieldProps {
    src?: string;
    title?: string;
    target?: string;
    download?: boolean | string;
    ping?: string;
    rel?: string;
    classes?: object;
}
export default FileField;
