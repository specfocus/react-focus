/// <reference types="react" />
import { ArraySchema } from '../../../lib/ArraySchema';
import { SimpleType } from '../../../lib/ObjectSchema';
import { FieldContext, FieldSchema } from '../FieldSchema';
export interface ArrayFieldsetProps extends ArraySchema<FieldSchema>, FieldContext {
    data: SimpleType[];
    name: string;
}
declare const ChipField: ({ data, name }: ArrayFieldsetProps) => JSX.Element;
export default ChipField;
