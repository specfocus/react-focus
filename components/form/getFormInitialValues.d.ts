import { Record } from '../../core';
export default function getFormInitialValues(initialValues: any, defaultValue: DefaultValue, record: Record): any;
interface DefaultValueObject {
    [key: string]: any;
}
declare type DefaultValueFunction = (record: Record) => DefaultValueObject;
declare type DefaultValue = DefaultValueObject | DefaultValueFunction;
export {};