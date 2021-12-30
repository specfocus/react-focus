import React from 'react';
import { SearchResult } from '../features/search/SearchState';
import { SimpleType } from '../lib/ObjectSchema';
export declare type AppAction = string | {
    type: string;
    [key: string]: SimpleType;
};
export interface AppWidgetProps {
    onClose: () => void;
}
export interface AppFrame {
    search?: (term: string) => Promise<AsyncIterator<SearchResult>>;
    title?: string;
    tools?: Array<React.FC<{}>>;
    handle?: (action: AppAction) => AppAction | null;
    widgets?: Record<string, React.FC<AppWidgetProps>>;
}
export declare type AppStack = Record<string, AppFrame>;
export declare const APP_STACK = "appStack";
export declare const appStack: import("recoil").RecoilState<AppStack>;
export declare const useAppStack: () => {
    pop: (key: string) => void;
    push: (key: string, config: AppFrame) => void;
    trigger: (action: AppAction) => Promise<void>;
};
