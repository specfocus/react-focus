import { Identifier, Record, PaginationPayload, SortPayload } from '../../types';
import { GET_MANY_REFERENCE } from '../..';
import { FETCH_END, FETCH_ERROR } from '../fetchActions';
import { NotificationSideEffect } from '../../sideEffect';
export declare const crudGetManyReference: (reference: string, target: string, id: Identifier, relatedTo: string, pagination: PaginationPayload, sort: SortPayload, filter: object, source: string) => CrudGetManyReferenceAction;
interface RequestPayload {
    source: string;
    target: string;
    id: Identifier;
    pagination: PaginationPayload;
    sort: SortPayload;
    filter: object;
}
export declare const CRUD_GET_MANY_REFERENCE = "CRUD_GET_MANY_REFERENCE";
export interface CrudGetManyReferenceAction {
    readonly type: typeof CRUD_GET_MANY_REFERENCE;
    readonly payload: RequestPayload;
    readonly meta: {
        resource: string;
        fetch: typeof GET_MANY_REFERENCE;
        relatedTo: string;
        onFailure: {
            notification: NotificationSideEffect;
        };
    };
}
export declare const CRUD_GET_MANY_REFERENCE_LOADING = "CRUD_GET_MANY_REFERENCE_LOADING";
export interface CrudGetManyReferenceLoadingAction {
    readonly type: typeof CRUD_GET_MANY_REFERENCE_LOADING;
    readonly payload: RequestPayload;
    readonly meta: {
        resource: string;
        relatedTo: string;
    };
}
export declare const CRUD_GET_MANY_REFERENCE_FAILURE = "CRUD_GET_MANY_REFERENCE_FAILURE";
export interface CrudGetManyReferenceFailureAction {
    readonly type: typeof CRUD_GET_MANY_REFERENCE_FAILURE;
    readonly error: string | object;
    readonly payload: string;
    readonly requestPayload: RequestPayload;
    readonly meta: {
        resource: string;
        relatedTo: string;
        notification: NotificationSideEffect;
        fetchResponse: typeof GET_MANY_REFERENCE;
        fetchStatus: typeof FETCH_ERROR;
    };
}
export declare const CRUD_GET_MANY_REFERENCE_SUCCESS = "CRUD_GET_MANY_REFERENCE_SUCCESS";
export interface CrudGetManyReferenceSuccessAction {
    readonly type: typeof CRUD_GET_MANY_REFERENCE_SUCCESS;
    readonly payload: {
        data: Record[];
        total: number;
    };
    readonly requestPayload: RequestPayload;
    readonly meta: {
        resource: string;
        relatedTo: string;
        fetchResponse: typeof GET_MANY_REFERENCE;
        fetchStatus: typeof FETCH_END;
    };
}
export {};
