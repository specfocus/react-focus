import { Record, Identifier, DataProviderProxy } from '../types';
/**
 * Helper function for calling the dataProvider.getMany() method,
 * and getting a Promise for the records indexed by id in return.
 *
 * @example
 *     fetchRelatedRecords(dataProvider)(records, 'post_id', 'posts').then(posts =>
 *         posts.map(record => ({
 *             ...record,
 *             post_title: posts[record.post_id].title,
 *         }))
 *     );
 */
declare const fetchRelatedRecords: (dataProvider: DataProviderProxy) => (data: any, field: any, resource: any) => Promise<{}>;
/**
 * Extracts, aggregates and deduplicates the ids of related records
 *
 * @example
 *     const books = [
 *         { id: 1, author_id: 123, title: 'Pride and Prejudice' },
 *         { id: 2, author_id: 123, title: 'Sense and Sensibility' },
 *         { id: 3, author_id: 456, title: 'War and Peace' },
 *     ];
 *     getRelatedIds(books, 'author_id'); => [123, 456]
 *
 * @example
 *     const books = [
 *         { id: 1, tag_ids: [1, 2], title: 'Pride and Prejudice' },
 *         { id: 2, tag_ids: [2, 3], title: 'Sense and Sensibility' },
 *         { id: 3, tag_ids: [4], title: 'War and Peace' },
 *     ];
 *     getRelatedIds(records, 'tag_ids'); => [1, 2, 3, 4]
 *
 * @param {Object[]} records An array of records
 * @param {string} field the identifier of the record field to use
 */
export declare const getRelatedIds: (records: Record[], field: string) => Identifier[];
export default fetchRelatedRecords;
