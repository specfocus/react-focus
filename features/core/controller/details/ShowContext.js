"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowContext = void 0;
const react_1 = require("react");
/**
 * Context to store the result of the useShowController() hook.
 *
 * Use the useShowContext() hook to read the context. That's what the Show components do in ../../app.
 *
 * @example
 *
 * import { useShowController, ShowContextProvider } from '../../../core';
 *
 * const Show = props => {
 *     const controllerProps = useShowController(props);
 *     return (
 *         <ShowContextProvider value={controllerProps}>
 *             ...
 *         </ShowContextProvider>
 *     );
 * };
 */
exports.ShowContext = (0, react_1.createContext)({
    basePath: null,
    record: null,
    defaultTitle: null,
    loaded: null,
    loading: null,
    refetch: null,
    resource: null,
    version: null,
});
exports.ShowContext.displayName = 'ShowContext';
