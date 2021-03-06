import { TextInputProps } from './TextInput';
export interface PasswordInputProps extends TextInputProps {
    initiallyVisible?: boolean;
}
declare const PasswordInput: (props: PasswordInputProps) => JSX.Element;
export default PasswordInput;
