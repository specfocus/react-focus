import { Record, PaginationPayload, SortPayload } from '../../types';
import { GET_LIST } from '../..';
import { FETCH_END, FETCH_ERROR } from '../fetchActions';
import { NotificationSideEffect } from '../../sideEffect';
export declare const crudGetMatching: (reference: string, relatedTo: string, pagination: PaginationPayload, sort: SortPayload, filter: object) => CrudGetMatchingAction;
interface RequestPayload {
    pagination: PaginationPayload;
    sort: SortPayload;
    filter: object;
}
export declare const CRUD_GET_MATCHING = "CRUD_GET_MATCHING";
export interface CrudGetMatchingAction {
    readonly type: typeof CRUD_GET_MATCHING;
    readonly payload: RequestPayload;
    readonly meta: {
        resource: string;
        fetch: typeof GET_LIST;
        relatedTo: string;
        onFailure: {
            notification: NotificationSideEffect;
        };
    };
}
export declare const CRUD_GET_MATCHING_LOADING = "CRUD_GET_MATCHING_LOADING";
export interface CrudGetMatchingLoadingAction {
    readonly type: typeof CRUD_GET_MATCHING_LOADING;
    readonly payload: RequestPayload;
    readonly meta: {
        resource: string;
        relatedTo: string;
    };
}
export declare const CRUD_GET_MATCHING_FAILURE = "CRUD_GET_MATCHING_FAILURE";
export interface CrudGetMatchingFailureAction {
    readonly type: typeof CRUD_GET_MATCHING_FAILURE;
    readonly error: string | object;
    readonly payload: string;
    readonly requestPayload: RequestPayload;
    readonly meta: {
        resource: string;
        relatedTo: string;
        notification: NotificationSideEffect;
        fetchResponse: typeof GET_LIST;
        fetchStatus: typeof FETCH_ERROR;
    };
}
export declare const CRUD_GET_MATCHING_SUCCESS = "CRUD_GET_MATCHING_SUCCESS";
export interface CrudGetMatchingSuccessAction {
    readonly type: typeof CRUD_GET_MATCHING_SUCCESS;
    readonly payload: {
        data: Record[];
        total: number;
    };
    readonly requestPayload: RequestPayload;
    readonly meta: {
        resource: string;
        relatedTo: string;
        fetchResponse: typeof GET_LIST;
        fetchStatus: typeof FETCH_END;
    };
}
export {};
