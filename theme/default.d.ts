import { Components } from '@material-ui/core/styles/components';
import { ThemeOptions } from '@mui/material';
export interface AppComponents extends Components {
    Sidebar?: {
        width?: number;
        closedWidth?: number;
    };
}
export interface AppThemeOptions extends Omit<ThemeOptions, 'components'> {
    components: AppComponents;
}
declare const defaultThemeOptions: AppThemeOptions;
export default defaultThemeOptions;
