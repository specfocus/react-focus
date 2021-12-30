/// <reference types="react" />
import { FieldProps } from '../../app';
import { Customer } from '../../data/db/types';
interface Props extends FieldProps<Customer> {
    className?: string;
    size?: string;
}
declare const AvatarField: ({ record, size, className }: Props) => JSX.Element | null;
export default AvatarField;
