"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var fetchActions_1 = require("../actions/fetchActions");
/**
 * Update the loading count, which starts or stops the loading indicator.
 *
 * To be used to show the loading indicator when you don't use the dataProvider.
 *
 * @return {Object} startLoading and stopLoading callbacks
 *
 * @example
 * import { useUpdateLoading } from '../app'
 *
 * const MyComponent = () => {
 *      const { startLoading, stopLoading } = useUpdateLoading();
 *      useEffect(() => {
 *          startLoading();
 *          fetch('http://my.domain.api/foo')
 *              .finally(() => stopLoading());
 *      }, []);
 *      return <span>Foo</span>;
 * }
 */
exports.default = (function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var startLoading = (0, react_1.useCallback)(function () {
        dispatch((0, fetchActions_1.fetchStart)());
    }, [dispatch]);
    var stopLoading = (0, react_1.useCallback)(function () {
        dispatch((0, fetchActions_1.fetchEnd)());
    }, [dispatch]);
    return { startLoading: startLoading, stopLoading: stopLoading };
});
