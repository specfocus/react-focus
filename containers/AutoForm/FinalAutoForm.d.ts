/// <reference types="react" />
import { BoxProps } from '@mui/material/Box';
import { AreaPresetKey } from '../AutoGrid/presets';
import { FieldSchema } from './FieldSchema';
interface FinalAutoFormProps<FormValues = Record<string, any>, InitialFormValues = Partial<FormValues>> extends BoxProps {
    config: AreaPresetKey;
    initialValues: InitialFormValues;
    form: FieldSchema;
    schema: any;
}
export default function FinalAutoForm({ children, form: fuckyou, initialValues, schema, ...props }: FinalAutoFormProps): JSX.Element;
export {};
