import { QueryFunctionParams } from './QueryFunctionParams';
import { MutationMode } from '../../types';
/**
 * Execute a dataProvider call
 *
 * Delegates execution to cache, optimistic, undoable, or pessimistic queries
 *
 * @see useDataProvider
 */
export declare const doQuery: ({ type, payload, resource, action, rest, onSuccess, onFailure, dataProvider, dispatch, logoutIfAccessDenied, allArguments, store, mutationMode, }: DoQueryParameters) => Promise<any>;
interface DoQueryParameters extends QueryFunctionParams {
    store: any;
    mutationMode: MutationMode;
}
export {};
