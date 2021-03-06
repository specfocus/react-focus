import React, { FC, ReactElement } from 'react';
import { TableRowProps } from '@mui/material';
import { Identifier, Record } from '../../../features/core';
import useDatagridStyles from './useDatagridStyles';
declare const DatagridRow: FC<DatagridRowProps>;
export interface DatagridRowProps extends Omit<TableRowProps, 'id' | 'classes'> {
    classes?: ReturnType<typeof useDatagridStyles>;
    basePath?: string;
    className?: string;
    expand?: ReactElement | FC<{
        basePath: string;
        id: Identifier;
        record: Record;
        resource: string;
    }>;
    hasBulkActions?: boolean;
    hover?: boolean;
    id?: Identifier;
    onToggleItem?: (id: Identifier, event: React.TouchEvent | React.MouseEvent) => void;
    record?: Record;
    resource?: string;
    rowClick?: RowClickFunction | string;
    selected?: boolean;
    style?: any;
    selectable?: boolean;
}
export declare type RowClickFunction = (id: Identifier, basePath: string, record: Record) => string | Promise<string>;
export declare const PureDatagridRow: React.NamedExoticComponent<DatagridRowProps>;
export default DatagridRow;
