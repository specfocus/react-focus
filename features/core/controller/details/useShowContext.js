"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useShowContext = void 0;
const react_1 = require("react");
const defaults_1 = __importDefault(require("lodash/defaults"));
const ShowContext_1 = require("./ShowContext");
/**
 * Hook to read the show controller props from the ShowContext.
 *
 * Mostly used within a <ShowContext.Provider> (e.g. as a descendent of <Show>).
 *
 * But you can also use it without a <ShowContext.Provider>. In this case, it is up to you
 * to pass all the necessary props.
 *
 * The given props will take precedence over context values.
 *
 * @typedef {Object} ShowControllerProps
 *
 * @returns {ShowControllerProps} create controller props
 *
 * @see useShowController for how it is filled
 *
 */
const useShowContext = (props) => {
    // Can't find a way to specify the RecordType when ShowContext is declared
    // @ts-ignore
    const context = (0, react_1.useContext)(ShowContext_1.ShowContext);
    // Props take precedence over the context
    return (0, react_1.useMemo)(() => (0, defaults_1.default)({}, props != null ? extractShowContextProps(props) : {}, context), [context, props]);
};
exports.useShowContext = useShowContext;
/**
 * Extract only the show controller props
 *
 * @param {Object} props props passed to the useShowContext hook
 *
 * @returns {ShowControllerProps} show controller props
 */
const extractShowContextProps = ({ basePath, record, data, defaultTitle, loaded, loading, resource, version, }) => ({
    basePath,
    // Necessary for actions (EditActions) which expect a data prop containing the record
    // @deprecated - to be removed in 4.0d
    record: record || data,
    data: record || data,
    defaultTitle,
    loaded,
    loading,
    resource,
    version,
});
