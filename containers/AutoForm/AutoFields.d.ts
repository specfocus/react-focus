/// <reference types="react" />
import 'date-fns';
import { ObjectSchema, SimpleObject } from '../../lib/ObjectSchema';
import { AreaPresetKey } from '../AutoGrid/presets';
import { FieldSchema } from './FieldSchema';
import { FieldsetContext, FieldsetProps } from './useFieldset';
export interface AutoFieldsProps extends FieldsetProps {
    config: AreaPresetKey;
    context: FieldsetContext;
    name?: string;
    schema: ObjectSchema<SimpleObject, FieldSchema>;
}
export default function AutoFields({ config, context, name, schema, }: AutoFieldsProps): JSX.Element | null;
