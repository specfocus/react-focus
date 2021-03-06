import { ComponentType, ReactElement } from 'react';
import { Record, SortPayload, PaginationPayload } from '../../types';
import { ListControllerProps } from '..';
export interface ReferenceArrayInputControllerChildrenFuncParams extends Omit<ListControllerProps, 'setSort'> {
    choices: Record[];
    error?: string;
    loaded: boolean;
    loading: boolean;
    setFilter: (filter: any) => void;
    setPagination: (pagination: PaginationPayload) => void;
    setSort: (sort: SortPayload) => void;
    setSortForList: (sort: string, order?: string) => void;
    warning?: string;
}
interface ReferenceArrayInputControllerProps {
    allowEmpty?: boolean;
    basePath: string;
    children: (params: ReferenceArrayInputControllerChildrenFuncParams) => ReactElement;
    filter?: object;
    filterToQuery?: (filter: {}) => any;
    input?: any;
    meta?: object;
    perPage?: number;
    record?: Record;
    reference: string;
    resource: string;
    sort?: SortPayload;
    source: string;
}
declare const _default: ComponentType<ReferenceArrayInputControllerProps>;
export default _default;
