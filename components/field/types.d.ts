import { ReactElement } from 'react';
import { Record } from '../../features/core';
import PropTypes from 'prop-types';
import { TableCellProps } from '@mui/material/TableCell';
declare type TextAlign = TableCellProps['align'];
declare type SortOrder = 'ASC' | 'DESC';
export interface FieldProps<RecordType extends Record = Record> extends PublicFieldProps, InjectedFieldProps<RecordType> {
}
export interface PublicFieldProps {
    addLabel?: boolean;
    sortBy?: string;
    sortByOrder?: SortOrder;
    source?: string;
    label?: string | ReactElement;
    sortable?: boolean;
    className?: string;
    cellClassName?: string;
    headerClassName?: string;
    formClassName?: string;
    textAlign?: TextAlign;
    emptyText?: string;
    fullWidth?: boolean;
}
export interface InjectedFieldProps<RecordType extends Record = Record> {
    basePath?: string;
    record?: RecordType;
    resource?: string;
}
export declare const fieldPropTypes: {
    addLabel: PropTypes.Requireable<boolean>;
    sortBy: PropTypes.Requireable<string>;
    sortByOrder: PropTypes.Requireable<SortOrder>;
    source: PropTypes.Requireable<string>;
    label: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    sortable: PropTypes.Requireable<boolean>;
    className: PropTypes.Requireable<string>;
    cellClassName: PropTypes.Requireable<string>;
    headerClassName: PropTypes.Requireable<string>;
    textAlign: PropTypes.Requireable<"right" | "left" | "inherit" | "center" | "justify">;
    emptyText: PropTypes.Requireable<string>;
};
export {};
