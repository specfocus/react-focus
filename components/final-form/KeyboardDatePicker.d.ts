/// <reference types="react" />
import { DatePickerProps as MuiKeyboardDatePickerProps } from '@mui/lab/DatePicker';
import { FieldProps } from 'react-final-form';
import { ShowErrorFunc } from './ErrorMessage';
export interface KeyboardDatePickerProps extends Partial<Omit<MuiKeyboardDatePickerProps, 'onChange'>> {
    name: string;
    dateFunsUtils?: any;
    locale?: any;
    fieldProps?: Partial<FieldProps<any, any>>;
    showError?: ShowErrorFunc;
}
export declare function KeyboardDatePicker(props: KeyboardDatePickerProps): JSX.Element;
