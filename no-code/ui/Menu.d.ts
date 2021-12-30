import { ReactNode } from 'react';
import PropTypes from 'prop-types';
export declare const MENU_WIDTH = 240;
export declare const CLOSED_MENU_WIDTH = 55;
export declare const Menu: {
    (props: MenuProps): JSX.Element;
    propTypes: {
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        dense: PropTypes.Requireable<boolean>;
        hasDashboard: PropTypes.Requireable<boolean>;
        logout: PropTypes.Requireable<PropTypes.ReactElementLike>;
        onMenuClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        onMenuClick: () => null;
    };
};
export interface MenuProps {
    classes?: object;
    className?: string;
    dense?: boolean;
    hasDashboard?: boolean;
    logout?: ReactNode;
    onMenuClick?: () => void;
}
