import { Identifier } from '../../core/types';
import { Review } from 'examples/db/types';
declare const rowStyle: (selectedRow?: Identifier) => (record: Review) => {};
export default rowStyle;
