import { Reducer } from 'redux';
export { getNotification } from './admin/notifications';
interface CustomReducers {
    [key: string]: Reducer;
}
declare const _default: (customReducers: CustomReducers, history: any) => any;
export default _default;
export declare const getPossibleReferenceValues: (state: any, props: any) => any;
export declare const getResources: (state: any) => any[];
export declare const getReferenceResource: (state: any, props: any) => any;
export { getPossibleReferences } from './admin';