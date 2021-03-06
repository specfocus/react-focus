import { TableProps } from '@mui/material';
import { ComponentType, FC, ReactElement } from 'react';
import { Identifier, Record, RecordMap, SortPayload } from '../../../features/core';
import { RowClickFunction } from './DatagridRow';
/**
 * The Datagrid component renders a list of records as a table.
 * It is usually used as a child of the <List> and <ReferenceManyField> components.
 *
 * Props:
 *  - rowStyle
 *
 * @example Display all posts as a datagrid
 * const postRowStyle = (record, index) => ({
 *     backgroundColor: record.nb_views >= 500 ? '#efe' : 'white',
 * });
 * export const PostList = (props) => (
 *     <List {...props}>
 *         <Datagrid rowStyle={postRowStyle}>
 *             <TextField source="id" />
 *             <TextField source="title" />
 *             <TextField source="body" />
 *             <EditButton />
 *         </Datagrid>
 *     </List>
 * );
 *
 * @example Display all the comments of the current post as a datagrid
 * <ReferenceManyField reference="comments" target="post_id">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="body" />
 *         <DateField source="created_at" />
 *         <EditButton />
 *     </Datagrid>
 * </ReferenceManyField>
 *
 *
 * @example Usage outside of a <List> or a <ReferenceManyField>.
 *
 * const currentSort = { field: 'published_at', order: 'DESC' };
 *
 * export const MyCustomList = (props) => {
 *     const { ids, data, total, loaded } = useGetList(
 *         'posts',
 *         { page: 1, perPage: 10 },
 *         currentSort
 *     );
 *
 *     return (
 *         <Datagrid
 *             basePath=""
 *             currentSort={currentSort}
 *             data={data}
 *             ids={ids}
 *             selectedIds={[]}
 *             loaded={loaded}
 *             total={total}
 *             setSort={() => {
 *                 console.log('set sort');
 *             }}
 *             onSelect={() => {
 *                 console.log('on select');
 *             }}
 *             onToggleItem={() => {
 *                 console.log('on toggle item');
 *             }}
 *         >
 *             <TextField source="id" />
 *             <TextField source="title" />
 *         </Datagrid>
 *     );
 * }
 */
declare const Datagrid: FC<DatagridProps>;
export interface DatagridProps<RecordType extends Record = Record> extends Omit<TableProps, 'size' | 'classes' | 'onSelect'> {
    body?: ReactElement | ComponentType;
    className?: string;
    expand?: ReactElement | FC<{
        basePath: string;
        id: Identifier;
        record: Record;
        resource: string;
    }>;
    hasBulkActions?: boolean;
    header?: ReactElement | ComponentType;
    hover?: boolean;
    empty?: ReactElement;
    isRowSelectable?: (record: Record) => boolean;
    isRowExpandable?: (record: Record) => boolean;
    optimized?: boolean;
    rowClick?: string | RowClickFunction;
    rowStyle?: (record: Record, index: number) => any;
    size?: 'medium' | 'small';
    basePath?: string;
    currentSort?: SortPayload;
    data?: RecordMap<RecordType>;
    ids?: Identifier[];
    loaded?: boolean;
    onSelect?: (ids: Identifier[]) => void;
    onToggleItem?: (id: Identifier) => void;
    setSort?: (sort: string, order?: string) => void;
    selectedIds?: Identifier[];
    total?: number;
}
export declare const injectedProps: string[];
export default Datagrid;
