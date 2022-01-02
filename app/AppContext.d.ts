import { AppContextProps } from '../features/core';
import { AppAction } from './AppAction';
declare const AppContext: {
    (props: AppContextProps): JSX.Element;
    defaultProps: {
        i18nProvider: import("../features/core").I18nProvider;
    };
    displayName: string;
};
export default AppContext;
export interface AppFrameConfig {
    actions: AppAction[];
}
