import * as React from 'react';
import { ReactElement, FC } from 'react';
import PropTypes from 'prop-types';
import { Identifier, Record } from '../../../features/core';
import useDatagridStyles from './useDatagridStyles';
import { ClassesOverride } from '../../types';
export interface DatagridLoadingProps {
    className?: string;
    classes?: ClassesOverride<typeof useDatagridStyles>;
    expand?: ReactElement | FC<{
        basePath: string;
        id: Identifier;
        record: Record;
        resource: string;
    }>;
    hasBulkActions?: boolean;
    nbChildren: number;
    nbFakeLines?: number;
    size?: 'small' | 'medium';
}
declare const _default: React.MemoExoticComponent<{
    ({ classes, className, expand, hasBulkActions, nbChildren, nbFakeLines, size, }: DatagridLoadingProps): JSX.Element;
    propTypes: {
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        expand: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.ReactComponentLike>;
        hasBulkActions: PropTypes.Requireable<boolean>;
        nbChildren: PropTypes.Requireable<number>;
        nbFakeLines: PropTypes.Requireable<number>;
        size: PropTypes.Requireable<string>;
    };
}>;
export default _default;
