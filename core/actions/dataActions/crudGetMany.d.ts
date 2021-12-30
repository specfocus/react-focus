import { Identifier, Record } from '../../types';
import { GET_MANY } from '../../core';
import { FETCH_END, FETCH_ERROR } from '../fetchActions';
import { NotificationSideEffect } from '../../sideEffect';
export declare const crudGetMany: (resource: string, ids: Identifier[]) => CrudGetManyAction;
interface RequestPayload {
    ids: Identifier[];
}
export declare const CRUD_GET_MANY = "CRUD_GET_MANY";
export interface CrudGetManyAction {
    readonly type: typeof CRUD_GET_MANY;
    readonly payload: RequestPayload;
    readonly meta: {
        resource: string;
        fetch: typeof GET_MANY;
        onFailure: {
            notification: NotificationSideEffect;
        };
    };
}
export declare const CRUD_GET_MANY_LOADING = "CRUD_GET_MANY_LOADING";
export interface CrudGetManyLoadingAction {
    readonly type: typeof CRUD_GET_MANY_LOADING;
    readonly payload: RequestPayload;
    readonly meta: {
        resource: string;
    };
}
export declare const CRUD_GET_MANY_FAILURE = "CRUD_GET_MANY_FAILURE";
export interface CrudGetManyFailureAction {
    readonly type: typeof CRUD_GET_MANY_FAILURE;
    readonly error: string | object;
    readonly payload: string;
    readonly requestPayload: RequestPayload;
    readonly meta: {
        resource: string;
        notification: NotificationSideEffect;
        fetchResponse: typeof GET_MANY;
        fetchStatus: typeof FETCH_ERROR;
    };
}
export declare const CRUD_GET_MANY_SUCCESS = "CRUD_GET_MANY_SUCCESS";
export interface CrudGetManySuccessAction {
    readonly type: typeof CRUD_GET_MANY_SUCCESS;
    readonly payload: {
        data: Record[];
    };
    readonly requestPayload: RequestPayload;
    readonly meta: {
        resource: string;
        fetchResponse: typeof GET_MANY;
        fetchStatus: typeof FETCH_END;
    };
}
export {};
