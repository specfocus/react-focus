import { AuthProvider, LegacyAuthProvider } from '../types';
declare const _default: (legacyAuthProvider: LegacyAuthProvider) => AuthProvider;
/**
 * Turn a function-based authProvider to an object-based one
 *
 * Allows using legacy authProviders transparently.
 *
 * @param {Function} legacyAuthProvider A legacy authProvider (type, params) => Promise<any>
 *
 * @returns {Object} An authProvider that ../../app can use
 */
export default _default;
