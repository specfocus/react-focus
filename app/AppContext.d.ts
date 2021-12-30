/// <reference types="react" />
import { AppContextProps } from '../core';
import { AppAction } from './AppAction';
declare const AppContext: {
    (props: AppContextProps): JSX.Element;
    defaultProps: {
        i18nProvider: import("../core").I18nProvider;
    };
    displayName: string;
};
export default AppContext;
export interface AppFrameConfig {
    actions: AppAction[];
}
