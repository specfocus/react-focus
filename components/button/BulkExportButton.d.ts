/// <reference types="react" />
import PropTypes from 'prop-types';
import { Identifier, Exporter } from '../../features/core';
import { ButtonProps } from './Button';
/**
 * Export the selected rows
 *
 * To be used inside the <List bulkActionButtons> prop.
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
declare const BulkExportButton: {
    (props: BulkExportButtonProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        exporter: PropTypes.Requireable<(...args: any[]) => any>;
        label: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
};
interface Props {
    basePath?: string;
    exporter?: Exporter;
    filterValues?: any;
    icon?: JSX.Element;
    label?: string;
    onClick?: (e: Event) => void;
    selectedIds?: Identifier[];
    resource?: string;
}
export declare type BulkExportButtonProps = Props & ButtonProps;
export default BulkExportButton;
