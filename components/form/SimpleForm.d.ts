import * as React from 'react';
import { ReactElement, ReactNode, HtmlHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { FormWithRedirectProps, MutationMode } from '../../features/core';
/**
 * Form with a one column layout, one input per line.
 *
 * Pass input components as children.
 *
 * @example
 *
 * import * as React from "react";
 * import { Create, Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from '../../app';
 * import RichTextInput from 'ra-input-rich-text';
 *
 * export const PostCreate = (props) => (
 *     <Create {...props}>
 *         <SimpleForm>
 *             <TextInput source="title" />
 *             <TextInput source="teaser" options={{ multiline: true }} />
 *             <RichTextInput source="body" />
 *             <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
 *         </SimpleForm>
 *     </Create>
 * );
 *
 * @typedef {Object} Props the props you can use (other props are injected by Create or Edit)
 * @prop {ReactElement[]} children Input elements
 * @prop {Object} initialValues
 * @prop {Function} validate
 * @prop {boolean} submitOnEnter
 * @prop {string} redirect
 * @prop {ReactElement} toolbar The element displayed at the bottom of the form, containing the SaveButton
 * @prop {string} variant Apply variant to all inputs. Possible values are 'standard', 'outlined', and 'filled' (default)
 * @prop {string} margin Apply variant to all inputs. Possible values are 'none', 'normal', and 'dense' (default)
 * @prop {boolean} sanitizeEmptyValues Whether or not deleted record attributes should be recreated with a `null` value (default: true)
 *
 * @param {Props} props
 */
declare const SimpleForm: {
    (props: SimpleFormProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        initialValues: PropTypes.Requireable<object>;
        mutationMode: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<object>;
        redirect: PropTypes.Requireable<string | boolean | ((...args: any[]) => any)>;
        save: PropTypes.Requireable<(...args: any[]) => any>;
        saving: PropTypes.Requireable<boolean>;
        submitOnEnter: PropTypes.Requireable<boolean>;
        toolbar: PropTypes.Requireable<PropTypes.ReactElementLike>;
        undoable: PropTypes.Requireable<boolean>;
        validate: PropTypes.Requireable<(...args: any[]) => any>;
        version: PropTypes.Requireable<number>;
        sanitizeEmptyValues: PropTypes.Requireable<boolean>;
    };
};
export interface SimpleFormProps extends Omit<FormWithRedirectProps, 'render'>, Omit<HtmlHTMLAttributes<HTMLFormElement>, 'defaultValue' | 'onSubmit' | 'children'> {
    basePath?: string;
    children: ReactNode;
    className?: string;
    component?: React.ComponentType<any>;
    initialValues?: any;
    margin?: 'none' | 'normal' | 'dense';
    mutationMode?: MutationMode;
    resource?: string;
    submitOnEnter?: boolean;
    toolbar?: ReactElement;
    /** @deprecated use mutationMode: undoable instead */
    undoable?: boolean;
    variant?: 'standard' | 'outlined' | 'filled';
}
export default SimpleForm;
