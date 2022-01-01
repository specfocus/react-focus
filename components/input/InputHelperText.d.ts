/// <reference types="react" />
import { ValidationErrorMessage } from '../../core';
export interface InputHelperTextProps {
    helperText?: string | boolean;
    error?: ValidationErrorMessage;
    touched: boolean;
}
declare const InputHelperText: (props: InputHelperTextProps) => JSX.Element;
export default InputHelperText;
