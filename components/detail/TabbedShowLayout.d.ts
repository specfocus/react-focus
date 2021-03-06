import { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Record } from '../../features/core';
/**
 * Tabbed Layout for a Show view, showing fields grouped in tabs.
 *
 * Receives the current `record` from the parent `<Show>` component,
 * and passes it to its children. Children should be Tab components.
 * The component passed as `tabs` props replaces the default material-ui's <Tabs> component.
 *
 * @example
 *     // in src/posts.js
 *     import * as React from "react";
 *     import { Show, TabbedShowLayout, Tab, TextField } from '../../app';
 *
 *     export const PostShow = (props) => (
 *         <Show {...props}>
 *             <TabbedShowLayout>
 *                 <Tab label="Content">
 *                     <TextField source="title" />
 *                     <TextField source="subtitle" />
 *                </Tab>
 *                 <Tab label="Metadata">
 *                     <TextField source="category" />
 *                </Tab>
 *             </TabbedShowLayout>
 *         </Show>
 *     );
 *
 *     // in src/App.js
 *     import * as React from "react";
 *     import { Admin, Resource } from '../../app';
 *
 *     import { PostShow } from './posts';
 *
 *     const App = () => (
 *         <Admin dataProvider={...}>
 *             <Resource name="posts" show={PostShow} />
 *         </Admin>
 *     );
 *     export default App;
 */
export declare const TabbedShowLayout: {
    (props: TabbedShowLayoutProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        location: PropTypes.Requireable<object>;
        match: PropTypes.Requireable<object>;
        record: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        syncWithLocation: PropTypes.Requireable<boolean>;
        tabs: PropTypes.Requireable<PropTypes.ReactElementLike>;
        value: PropTypes.Requireable<number>;
        version: PropTypes.Requireable<number>;
    };
    defaultProps: {
        tabs: JSX.Element;
    };
};
export interface TabbedShowLayoutProps {
    basePath?: string;
    className?: string;
    children: ReactNode;
    record?: Record;
    resource?: string;
    syncWithLocation?: boolean;
    tabs?: ReactElement;
    value?: any;
    version?: number;
}
