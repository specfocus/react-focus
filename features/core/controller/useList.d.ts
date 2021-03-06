import { FilterPayload, Identifier, Record, SortPayload } from '../types';
import { ListControllerProps } from '.';
/**
 * Handle filtering, sorting and pagination on local data.
 *
 * Returns the data and callbacks expected by <ListContext>.
 *
 * @example
 * const data = [
 *     { id: 1, name: 'Arnold' },
 *     { id: 2, name: 'Sylvester' },
 *     { id: 3, name: 'Jean-Claude' },
 * ]
 * const ids = [1, 2, 3];
 *
 * const MyComponent = () => {
 *     const listContext = useList({
 *         data,
 *         ids,
 *         basePath: '/resource';
 *         resource: 'resource';
 *     });
 *     return (
 *         <ListContextProvider value={listContext}>
 *             <Datagrid>
 *                 <TextField source="id" />
 *                 <TextField source="name" />
 *             </Datagrid>
 *         </ListContextProvider>
 *     );
 * };
 *
 * @param {UseListOptions} props
 * @param {Record[]} props.data An array of records
 * @param {Identifier[]} props.ids An array of the record identifiers
 * @param {Boolean} props.loaded: A boolean indicating whether the data has been loaded at least once
 * @param {Boolean} props.loading: A boolean indicating whether the data is being loaded
 * @param {Error | String} props.error: Optional. The error if any occurred while loading the data
 * @param {Object} props.filter: Optional. An object containing the filters applied on the data
 * @param {Number} props.page: Optional. The initial page index
 * @param {Number} props.perPage: Optional. The initial page size
 * @param {SortPayload} props.sort: Optional. The initial sort (field and order)
 */
export declare const useList: (props: UseListOptions) => UseListValue;
export interface UseListOptions<RecordType extends Record = Record> {
    data: RecordType[];
    ids: Identifier[];
    error?: any;
    filter?: FilterPayload;
    loading: boolean;
    loaded: boolean;
    page?: number;
    perPage?: number;
    sort?: SortPayload;
}
export declare type UseListValue = Omit<ListControllerProps, 'resource' | 'basePath' | 'refetch'>;
