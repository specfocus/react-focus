/// <reference types="react" />
import { FieldProps } from '../../app';
import { Customer } from '../../data/db/types';
declare const AddressField: ({ record }: FieldProps<Customer>) => JSX.Element | null;
export default AddressField;