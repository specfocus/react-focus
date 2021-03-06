import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { TabsProps } from '@mui/material/Tabs';
declare const TabbedFormTabs: {
    (props: TabbedFormTabsProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        classes: PropTypes.Requireable<object>;
        url: PropTypes.Requireable<string>;
        tabsWithErrors: PropTypes.Requireable<string[]>;
    };
};
export declare const getTabFullPath: (tab: ReactElement, index: number, baseUrl: string) => string;
export interface TabbedFormTabsProps extends TabsProps {
    classes?: any;
    url?: string;
    tabsWithErrors?: string[];
    syncWithLocation?: boolean;
}
export default TabbedFormTabs;
