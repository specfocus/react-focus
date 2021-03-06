import { PaginationPayload, SortPayload, Identifier } from '../types';
export declare const CRUD_GET_MANY_ACCUMULATE = "CRUD_GET_MANY_ACCUMULATE";
export interface CrudGetManyAccumulateAction {
    readonly type: typeof CRUD_GET_MANY_ACCUMULATE;
    readonly payload: {
        resource: string;
        ids: Identifier[];
    };
    readonly meta: {
        accumulate: any;
    };
}
export declare const crudGetManyAccumulate: (resource: string, ids: Identifier[]) => CrudGetManyAccumulateAction;
export declare const CRUD_GET_MATCHING_ACCUMULATE = "CRUD_GET_MATCHING_ACCUMULATE";
export interface CrudGetMatchingAccumulateAction {
    readonly type: typeof CRUD_GET_MATCHING_ACCUMULATE;
    readonly meta: {
        accumulate: () => any;
        accumulateValues?: () => boolean;
        accumulateKey?: string;
    };
}
export declare const crudGetMatchingAccumulate: (reference: string, relatedTo: string, pagination: PaginationPayload, sort: SortPayload, filter: object) => CrudGetMatchingAccumulateAction;
