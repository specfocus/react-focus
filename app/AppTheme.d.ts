import { Localization } from '@mui/material/locale';
import { Theme } from '@mui/material/styles';
import { AppThemeOptions } from '../theme/default';
export interface AppTheme {
    localeKey?: string;
    localization?: Localization;
    theme?: Theme;
    themeKey?: string;
    themeOptions?: AppThemeOptions;
}
export declare const APP_THEME = "appTheme";
export declare const appTheme: import("recoil").RecoilState<AppTheme>;
export declare const useAppThemeState: ({ themeKey }: {
    themeKey: string;
}) => void;
export declare const useAppThemeValue: () => Theme | undefined;
export declare const useThemeLocaleState: ({ languageTag }: {
    languageTag: string;
}) => void;
