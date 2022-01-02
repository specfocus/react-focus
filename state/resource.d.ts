import { RecoilState } from 'recoil';
import { SimpleType } from '@specfocus/spec-focus/object';
export declare type Action = string | [string] | [string, SimpleType];
export declare type State = SimpleType;
export declare type Store = Record<string, State>;
export declare type Reducer = (store: Store, action: Action) => Store;
export declare const atomActionQueue: RecoilState<Action[]>;
export declare const atomReducerStack: RecoilState<[string, SimpleType][]>;
export declare const atomStateStore: RecoilState<Record<string, SimpleType>>;
export declare const selectorState: (param: string) => RecoilState<SimpleType>;
export declare const selectorAction: RecoilState<Action>;
export declare const useDequeueAction: () => Action | undefined;
export declare const useEnqueueAction: (action: Action) => void;
export declare const usePushReducer: (reducer: Reducer) => void;
