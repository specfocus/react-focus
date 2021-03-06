import * as React from 'react';
import { ReactElement, ReactNode, HtmlHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { FormWithRedirectProps, MutationMode, Record, RedirectionSideEffect, OnSuccess, OnFailure } from '../../features/core';
/**
 * Form layout where inputs are divided by tab, one input per line.
 *
 * Pass FormTab components as children.
 *
 * @example
 *
 * import * as React from "react";
 * import {
 *     Edit,
 *     TabbedForm,
 *     FormTab,
 *     Datagrid,
 *     TextField,
 *     DateField,
 *     TextInput,
 *     ReferenceManyField,
 *     NumberInput,
 *     DateInput,
 *     BooleanInput,
 *     EditButton
 * } from '../../app';
 *
 * export const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <TabbedForm>
 *             <FormTab label="summary">
 *                 <TextInput disabled label="Id" source="id" />
 *                 <TextInput source="title" validate={required()} />
 *                 <TextInput multiline source="teaser" validate={required()} />
 *             </FormTab>
 *             <FormTab label="body">
 *                 <RichTextInput source="body" validate={required()} addLabel={false} />
 *             </FormTab>
 *             <FormTab label="Miscellaneous">
 *                 <TextInput label="Password (if protected post)" source="password" type="password" />
 *                 <DateInput label="Publication date" source="published_at" />
 *                 <NumberInput source="average_note" validate={[ number(), minValue(0) ]} />
 *                 <BooleanInput label="Allow comments?" source="commentable" defaultValue />
 *                 <TextInput disabled label="Nb views" source="views" />
 *             </FormTab>
 *             <FormTab label="comments">
 *                 <ReferenceManyField reference="comments" target="post_id" addLabel={false}>
 *                     <Datagrid>
 *                         <TextField source="body" />
 *                         <DateField source="created_at" />
 *                         <EditButton />
 *                     </Datagrid>
 *                 </ReferenceManyField>
 *             </FormTab>
 *         </TabbedForm>
 *     </Edit>
 * );
 *
 * @typedef {Object} Props the props you can use (other props are injected by Create or Edit)
 * @prop {ReactElement[]} FormTab elements
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
export declare const TabbedForm: {
    (props: TabbedFormProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        initialValues: PropTypes.Requireable<object>;
        mutationMode: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<object>;
        redirect: PropTypes.Requireable<string | boolean | ((...args: any[]) => any)>;
        save: PropTypes.Requireable<(...args: any[]) => any>;
        saving: PropTypes.Requireable<boolean>;
        submitOnEnter: PropTypes.Requireable<boolean>;
        undoable: PropTypes.Requireable<boolean>;
        validate: PropTypes.Requireable<(...args: any[]) => any>;
        sanitizeEmptyValues: PropTypes.Requireable<boolean>;
    };
};
export interface TabbedFormProps extends Omit<FormWithRedirectProps, 'render'>, Omit<HtmlHTMLAttributes<HTMLFormElement>, 'defaultValue' | 'onSubmit' | 'children'> {
    basePath?: string;
    children: ReactNode;
    className?: string;
    initialValues?: any;
    margin?: 'none' | 'normal' | 'dense';
    mutationMode?: MutationMode;
    record?: Record;
    redirect?: RedirectionSideEffect;
    resource?: string;
    sanitizeEmptyValues?: boolean;
    save?: (data: Partial<Record>, redirectTo: RedirectionSideEffect, options?: {
        onSuccess?: OnSuccess;
        onFailure?: OnFailure;
    }) => void;
    submitOnEnter?: boolean;
    syncWithLocation?: boolean;
    tabs?: ReactElement;
    toolbar?: ReactElement;
    /** @deprecated use mutationMode: undoable instead */
    undoable?: boolean;
    variant?: 'standard' | 'outlined' | 'filled';
    warnWhenUnsavedChanges?: boolean;
}
export declare const findTabsWithErrors: (children: any, errors: any) => React.ReactChild | React.ReactFragment | React.ReactPortal;
