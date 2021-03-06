import PropTypes from 'prop-types';
import { TextFieldProps } from '@mui/material/TextField';
import { InputProps } from '../../features/core';
/**
 * Form input to edit a Date string value in the "YYYY-MM-DD" format (e.g. '2021-06-23').
 *
 * Renders a date picker (the exact UI depends on the browser).
 *
 * @example
 * import { Edit, SimpleForm, DateInput } from '../../app';
 *
 * const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <DateInput source="published_at" />
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * @example
 * // If the initial value is a Date object, DateInput converts it to a string
 * // but you must pass a custom parse method to convert the form value
 * // (which is always a date string) back to a Date object.
 * <DateInput source="published_at" parse={val => new Date(val)} />
 */
declare const DateInput: {
    ({ defaultValue, format, initialValue, label, name, options, source, resource, helperText, margin, onBlur, onChange, onFocus, parse, validate, variant, ...rest }: DateInputProps): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<string | boolean>;
        options: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
    };
    defaultProps: {
        options: {};
    };
};
export declare type DateInputProps = InputProps<TextFieldProps> & Omit<TextFieldProps, 'helperText' | 'label'>;
export default DateInput;
