import PropTypes from 'prop-types';
declare const DashboardMenuItem: {
    (props: DashboardMenuItemProps): JSX.Element;
    propTypes: {
        classes: PropTypes.Requireable<object>;
        locale: PropTypes.Requireable<string>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        dense: PropTypes.Requireable<boolean>;
        sidebarIsOpen: PropTypes.Requireable<boolean>;
    };
};
export interface DashboardMenuItemProps {
    classes?: object;
    locale?: string;
    onClick?: () => void;
    dense?: boolean;
    /**
     * @deprecated
     */
    sidebarIsOpen?: boolean;
}
export default DashboardMenuItem;
