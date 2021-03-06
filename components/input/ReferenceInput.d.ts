import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { InputProps, ReferenceInputValue, UseInputValue } from '../../features/core';
/**
 * An Input component for choosing a reference record. Useful for foreign keys.
 *
 * This component fetches the possible values in the reference resource
 * (using `dataProvider.getList()`), then delegates rendering
 * to a subcomponent, to which it passes the possible choices
 * as the `choices` attribute.
 *
 * Use it with a selector component as child, like `<AutocompleteInput>`,
 * `<SelectInput>`, or `<RadioButtonGroupInput>`.
 *
 * @example
 * export const CommentEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceInput label="Post" source="post_id" reference="posts">
 *                 <AutocompleteInput optionText="title" />
 *             </ReferenceInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * @example
 * export const CommentEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceInput label="Post" source="post_id" reference="posts">
 *                 <SelectInput optionText="title" />
 *             </ReferenceInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * By default, restricts the possible values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      perPage={100}>
 *     <SelectInput optionText="title" />
 * </ReferenceInput>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      sort={{ field: 'title', order: 'ASC' }}>
 *     <SelectInput optionText="title" />
 * </ReferenceInput>
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      filter={{ is_published: true }}>
 *     <SelectInput optionText="title" />
 * </ReferenceInput>
 *
 * The enclosed component may filter results. ReferenceInput passes a `setFilter`
 * function as prop to its child component. It uses the value to create a filter
 * for the query - by default { q: [searchText] }. You can customize the mapping
 * searchText => searchQuery by setting a custom `filterToQuery` function prop:
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      filterToQuery={searchText => ({ title: searchText })}>
 *     <AutocompleteInput optionText="title" />
 * </ReferenceInput>
 */
declare const ReferenceInput: {
    (props: ReferenceInputProps): JSX.Element;
    propTypes: {
        allowEmpty: PropTypes.Requireable<boolean>;
        basePath: PropTypes.Requireable<string>;
        children: PropTypes.Validator<PropTypes.ReactElementLike>;
        className: PropTypes.Requireable<string>;
        classes: PropTypes.Requireable<object>;
        filter: PropTypes.Requireable<object>;
        filterToQuery: PropTypes.Validator<(...args: any[]) => any>;
        label: PropTypes.Requireable<string>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        perPage: PropTypes.Requireable<number>;
        record: PropTypes.Requireable<object>;
        reference: PropTypes.Validator<string>;
        resource: PropTypes.Requireable<string>;
        sort: PropTypes.Requireable<PropTypes.InferProps<{
            field: PropTypes.Requireable<string>;
            order: PropTypes.Requireable<string>;
        }>>;
        source: PropTypes.Requireable<string>;
    };
    defaultProps: {
        filter: {};
        filterToQuery: (searchText: any) => {
            q: any;
        } | {
            q?: undefined;
        };
        perPage: number;
        sort: {
            field: string;
            order: string;
        };
    };
};
export interface ReferenceInputProps extends InputProps {
    allowEmpty?: boolean;
    basePath?: string;
    children: ReactElement;
    classes?: any;
    className?: string;
    filterToQuery?: (filter: string) => any;
    label?: string;
    perPage?: number;
    reference: string;
    referenceSource?: (resource: string, source: string) => string;
    resource?: string;
    [key: string]: any;
}
export interface ReferenceInputViewProps extends ReferenceInputValue, ReferenceInputProps, Omit<UseInputValue, 'id'> {
}
export declare const ReferenceInputView: (props: ReferenceInputViewProps) => JSX.Element;
export default ReferenceInput;
