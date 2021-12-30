/// <reference types="react" />
import { KeyboardTimePickerProps as MuiKeyboardTimePickerProps } from '@mui/lab/DatePicker';
import { FieldProps } from 'react-final-form';
import { ShowErrorFunc } from './ErrorMessage';
export interface KeyboardTimePickerProps extends Partial<Omit<MuiKeyboardTimePickerProps, 'onChange'>> {
    name: string;
    dateFunsUtils?: any;
    locale?: any;
    fieldProps?: Partial<FieldProps<any, any>>;
    showError?: ShowErrorFunc;
}
export declare function KeyboardTimePicker(props: KeyboardTimePickerProps): JSX.Element;
