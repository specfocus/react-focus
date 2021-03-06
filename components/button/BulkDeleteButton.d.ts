/// <reference types="react" />
import PropTypes from 'prop-types';
import { BulkDeleteWithConfirmButtonProps } from './BulkDeleteWithConfirmButton';
import { BulkDeleteWithUndoButtonProps } from './BulkDeleteWithUndoButton';
/**
 * Deletes the selected rows.
 *
 * To be used inside the <List bulkActionButtons> prop (where it's enabled by default).
 *
 * @example // basic usage
 * import * as React from 'react';
 * import { Fragment } from 'react';
 * import { BulkDeleteButton, BulkExportButton } from '../../app';
 *
 * const PostBulkActionButtons = ({ basePath }) => (
 *     <Fragment>
 *         <BulkExportButton />
 *         <BulkDeleteButton basePath={basePath} />
 *     </Fragment>
 * );
 *
 * export const PostList = (props) => (
 *     <List {...props} bulkActionButtons={<PostBulkActionButtons />}>
 *         ...
 *     </List>
 * );
 */
declare const BulkDeleteButton: {
    (props: BulkDeleteButtonProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
        undoable: PropTypes.Requireable<boolean>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
    defaultProps: {
        undoable: boolean;
    };
};
interface Props {
    undoable?: boolean;
}
export declare type BulkDeleteButtonProps = Props & (BulkDeleteWithUndoButtonProps | BulkDeleteWithConfirmButtonProps);
export default BulkDeleteButton;
