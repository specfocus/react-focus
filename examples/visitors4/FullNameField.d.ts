import * as React from 'react';
import { FieldProps } from '../../app';
import { Customer } from '../../data/db/types';
interface Props extends FieldProps<Customer> {
    size?: string;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
