/// <reference types="react" />
import { Record as RaRecord } from '../../core';
declare const DatagridContext: import("react").Context<DatagridContextValue>;
export declare type DatagridContextValue = {
    isRowExpandable?: (record: RaRecord) => boolean;
};
export default DatagridContext;
