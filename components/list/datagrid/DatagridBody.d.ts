import * as React from 'react';
import { FC, ReactElement } from 'react';
import { TableBodyProps } from '@mui/material';
import { Identifier, Record, RecordMap } from '../../../features/core';
import { RowClickFunction } from './DatagridRow';
declare const DatagridBody: FC<DatagridBodyProps>;
export interface DatagridBodyProps extends Omit<TableBodyProps, 'classes'> {
    basePath?: string;
    className?: string;
    data?: RecordMap;
    expand?: ReactElement | FC<{
        basePath: string;
        id: Identifier;
        record: Record;
        resource: string;
    }>;
    hasBulkActions?: boolean;
    hover?: boolean;
    ids?: Identifier[];
    onToggleItem?: (id: Identifier, event: React.TouchEvent | React.MouseEvent) => void;
    record?: Record;
    resource?: string;
    row?: ReactElement;
    rowClick?: string | RowClickFunction;
    rowStyle?: (record: Record, index: number) => any;
    selectedIds?: Identifier[];
    isRowSelectable?: (record: Record) => boolean;
}
export declare const PureDatagridBody: React.NamedExoticComponent<DatagridBodyProps>;
export default DatagridBody;
