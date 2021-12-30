/// <reference types="react" />
import 'date-fns';
import { StringDomain } from '../../../lib/StringDomain';
import { StringSchema } from '../../../lib/StringSchema';
import { FieldSchema } from '../FieldSchema';
import { FieldProps } from '../useFieldset';
declare const StringField: (props: FieldProps<StringSchema<FieldSchema>, StringDomain>) => JSX.Element;
export default StringField;
