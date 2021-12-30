import { ThemeName } from '../../app/types';
export declare const CHANGE_THEME = "CHANGE_THEME";
export declare const changeTheme: (theme: ThemeName) => {
    type: string;
    payload: ThemeName;
};
