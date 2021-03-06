import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ShowProps } from '../types';
/**
 * Page component for the Show view
 *
 * The `<Show>` component renders the page title and actions,
 * fetches the record from the data provider.
 * It is not responsible for rendering the actual form -
 * that's the job of its child component (usually `<SimpleShowLayout>`),
 * to which it passes the `record` as prop.
 *
 * The <Show> component accepts the following props:
 *
 * - actions
 * - aside
 * - component
 * - title
 *
 * @example
 *
 * // in src/posts.js
 * import * as React from "react";
 * import { Show, SimpleShowLayout, TextField } from '../../app';
 *
 * export const PostShow = (props) => (
 *     <Show {...props}>
 *         <SimpleShowLayout>
 *             <TextField source="title" />
 *         </SimpleShowLayout>
 *     </Show>
 * );
 *
 * // in src/App.js
 * import * as React from "react";
 * import { Admin, Resource } from '../../app';
 *
 * import { PostShow } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={...}>
 *         <Resource name="posts" show={PostShow} />
 *     </Admin>
 * );
 * export default App;
 */
export declare const Show: {
    (props: ShowProps & {
        children: ReactElement;
    }): ReactElement;
    propTypes: {
        actions: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
        aside: PropTypes.Requireable<PropTypes.ReactElementLike>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        hasCreate: PropTypes.Requireable<boolean>;
        hasEdit: PropTypes.Requireable<boolean>;
        hasList: PropTypes.Requireable<boolean>;
        hasShow: PropTypes.Requireable<boolean>;
        id: PropTypes.Validator<any>;
        resource: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
