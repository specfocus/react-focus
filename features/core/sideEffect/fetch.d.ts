import { DataProvider } from '../types';
import { DeclarativeSideEffect } from '../dataProvider/useDeclarativeSideEffects';
interface ActionWithSideEffect {
    type: string;
    payload: any;
    meta: {
        fetch: string;
        resource: string;
        onSuccess?: DeclarativeSideEffect;
        onFailure?: DeclarativeSideEffect;
    };
}
export declare function handleFetch(dataProvider: DataProvider, action: ActionWithSideEffect): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").AllEffect<import("redux-saga/effects").PutEffect<{
    type: string;
}>> | import("redux-saga/effects").CallEffect<unknown> | import("redux-saga/effects").PutEffect<{
    type: string;
}> | import("redux-saga/effects").CancelledEffect, void, unknown>;
export declare const takeFetchAction: (action: any) => any;
declare const fetch: (dataProvider: DataProvider) => () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default fetch;
