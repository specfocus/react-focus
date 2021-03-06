import PropTypes from 'prop-types';
import { Record } from '../../features/core';
/**
 * Action Toolbar for the Show view
 *
 * Internal component. If you want to add or remove actions for a Show view,
 * write your own ShowActions Component. Then, in the <Show> component,
 * use it in the `actions` prop to pass a custom component.
 *
 * @example
 *     import Button from '@mui/material/Button';
 *     import { TopToolbar, EditButton, Show } from '../../app';
 *
 *     const PostShowActions = ({ basePath, record, resource }) => (
 *         <TopToolbar>
 *             <EditButton basePath={basePath} record={record} />
 *             // Add your custom actions here //
 *             <Button color="primary" onClick={customAction}>Custom Action</Button>
 *         </TopToolbar>
 *     );
 *
 *     export const PostShow = (props) => (
 *         <Show actions={<PostShowActions />} {...props}>
 *             ...
 *         </Show>
 *     );
 */
export declare const ShowActions: {
    ({ className, ...rest }: ShowActionsProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        data: PropTypes.Requireable<object>;
        hasCreate: PropTypes.Requireable<boolean>;
        hasEdit: PropTypes.Requireable<boolean>;
        hasShow: PropTypes.Requireable<boolean>;
        hasList: PropTypes.Requireable<boolean>;
        resource: PropTypes.Requireable<string>;
    };
};
export interface ShowActionsProps {
    basePath?: string;
    className?: string;
    data?: Record;
    hasCreate?: boolean;
    hasEdit?: boolean;
    hasShow?: boolean;
    hasList?: boolean;
    resource?: string;
}
