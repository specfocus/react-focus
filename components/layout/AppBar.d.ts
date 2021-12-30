import * as React from 'react';
import { AppBarProps as MuiAppBarProps } from '@mui/material';
export interface AppBarProps extends Omit<MuiAppBarProps, 'title'> {
    container?: React.ElementType<any>;
    logout?: React.ReactNode;
    open?: boolean;
    title?: string | JSX.Element;
    userMenu?: JSX.Element | boolean;
}
declare const _default: React.NamedExoticComponent<AppBarProps>;
export default _default;
