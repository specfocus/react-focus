import { QueryFunctionParams } from './QueryFunctionParams';
/**
 * In pessimistic mode, the useDataProvider hook calls the dataProvider. When a
 * successful response arrives, the hook dispatches a SUCCESS action, executes
 * success side effects and returns the response. If the response is an error,
 * the hook dispatches a FAILURE action, executes failure side effects, and
 * throws an error.
 */
export declare const performPessimisticQuery: ({ type, payload, resource, action, rest, onSuccess, onFailure, dataProvider, dispatch, logoutIfAccessDenied, allArguments, }: QueryFunctionParams) => Promise<any>;
