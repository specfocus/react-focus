import { AuthProvider } from '../types';
declare const _default: (authProvider?: AuthProvider | undefined) => (() => null) | (() => Generator<any, void, unknown>);
export default _default;
export declare const handleLogin: (authProvider: AuthProvider) => (action: any) => Generator<any, void, unknown>;
export declare const handleCheck: (authProvider: AuthProvider) => (action: any) => Generator<any, void, unknown>;
export declare const handleLogout: (authProvider: AuthProvider) => (action: any) => Generator<any, void, unknown>;
export declare const handleFetchError: (authProvider: AuthProvider) => (action: any) => Generator<any, void, unknown>;
