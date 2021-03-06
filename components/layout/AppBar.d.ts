import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBarProps as MuiAppBarProps } from '@mui/material';
import HideOnScroll from './HideOnScroll';
export interface AppBarProps extends Omit<MuiAppBarProps, 'title'> {
    container?: React.ElementType<any>;
    logout?: React.ReactNode;
    open?: boolean;
    title?: string | JSX.Element;
    userMenu?: JSX.Element | boolean;
}
declare const _default: React.MemoExoticComponent<{
    (props: AppBarProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        container: (props: any, propName: any, componentName: any) => Error;
        logout: PropTypes.Requireable<PropTypes.ReactElementLike>;
        open: PropTypes.Requireable<boolean>;
        userMenu: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
    };
    defaultProps: {
        userMenu: JSX.Element;
        container: typeof HideOnScroll;
    };
}>;
export default _default;
