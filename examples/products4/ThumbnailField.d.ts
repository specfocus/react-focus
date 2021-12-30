/// <reference types="react" />
import { FieldProps } from '../../app';
import { Product } from '../../data/db/types';
declare const ThumbnailField: (props: FieldProps<Product>) => JSX.Element | null;
export default ThumbnailField;