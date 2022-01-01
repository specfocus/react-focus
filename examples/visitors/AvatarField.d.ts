/// <reference types="react" />
import { FieldProps } from '../../app';
import { Customer } from '../db/types';
interface Props extends FieldProps<Customer> {
    className?: string;
    size?: string;
}
declare const AvatarField: ({ record, size, className }: Props) => JSX.Element;
export default AvatarField;
