import { QueryFunctionParams } from './QueryFunctionParams';
/**
 * In optimistic mode, the useDataProvider hook dispatches an optimistic action
 * and executes the success side effects right away. Then it immediately calls
 * the dataProvider.
 *
 * We call that "optimistic" because the hook returns a resolved Promise
 * immediately (although it has an empty value). That only works if the
 * caller reads the result from the Redux store, not from the Promise.
 */
export declare const performOptimisticQuery: ({ type, payload, resource, action, rest, onSuccess, onFailure, dataProvider, dispatch, logoutIfAccessDenied, allArguments, }: QueryFunctionParams) => Promise<{}>;
