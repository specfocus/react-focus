import { DataProvider } from '../types';
declare const _default: (dataProvider: DataProvider, duration?: number) => DataProvider;
/**
 * Wrap a dataProvider in a Proxy that modifies responses to add caching.
 *
 * This proxy adds a validUntil field to the response of read queries
 * (getList, getMany, getOne) so that the useDataProvider enables caching
 * for these calls.
 *
 * @param {DataProvider} dataProvider A data provider object
 * @param {number} duration Cache duration in milliseconds. Defaults to 5 minutes.
 *
 * @example
 *
 * import { cacheDataProviderProxy } from '../../core';
 *
 * const cacheEnabledDataProvider = cacheDataProviderProxy(dataProvider);
 */
export default _default;
