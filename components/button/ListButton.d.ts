import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps } from './Button';
/**
 * Opens the List view of a given resource
 *
 * @example // basic usage
 * import { ListButton } from '../../app';
 *
 * const CommentListButton = () => (
 *     <ListButton basePath="/comments" label="Comments" />
 * );
 *
 * @example // linking back to the list from the Edit view
 * import { TopToolbar, ListButton, ShowButton, Edit } from '../../app';
 *
 * const PostEditActions = ({ basePath, record, resource }) => (
 *     <TopToolbar>
 *         <ListButton basePath={basePath} />
 *         <ShowButton basePath={basePath} record={record} />
 *     </TopToolbar>
 * );
 *
 * export const PostEdit = (props) => (
 *     <Edit actions={<PostEditActions />} {...props}>
 *         ...
 *     </Edit>
 * );
 */
declare const ListButton: {
    (props: ListButtonProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Requireable<string>;
    };
};
interface Props {
    basePath?: string;
    icon?: ReactElement;
    label?: string;
}
export declare type ListButtonProps = Props & ButtonProps;
export default ListButton;
