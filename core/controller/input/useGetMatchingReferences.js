"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var accumulateActions_1 = require("../../actions/accumulateActions");
var core_1 = require("../../core");
var reducer_1 = require("../../reducer");
var hooks_1 = require("../../util/hooks");
var defaultReferenceSource = function (resource, source) {
    return "".concat(resource, "@").concat(source);
};
exports.default = (function (props) {
    var reference = props.reference, _a = props.referenceSource, referenceSource = _a === void 0 ? defaultReferenceSource : _a, source = props.source, filter = props.filter, pagination = props.pagination, sort = props.sort, id = props.id;
    var resource = (0, core_1.useResourceContext)(props);
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, hooks_1.useDeepCompareEffect)(function () {
        dispatch((0, accumulateActions_1.crudGetMatchingAccumulate)(reference, referenceSource(resource, source), pagination, sort, filter));
    }, [
        dispatch,
        filter,
        reference,
        referenceSource,
        resource,
        source,
        pagination,
        sort,
    ]);
    var matchingReferences = useGetMatchingReferenceSelector({
        referenceSource: referenceSource,
        reference: reference,
        resource: resource,
        source: source,
        id: id,
    });
    if (!matchingReferences) {
        return {
            loading: true,
            error: null,
            matchingReferences: null,
        };
    }
    if (matchingReferences.error) {
        return {
            loading: false,
            matchingReferences: null,
            error: matchingReferences.error,
        };
    }
    return {
        loading: false,
        error: null,
        matchingReferences: matchingReferences,
    };
});
var useGetMatchingReferenceSelector = function (_a) {
    var referenceSource = _a.referenceSource, reference = _a.reference, resource = _a.resource, source = _a.source, id = _a.id;
    var getMatchingReferences = (0, react_1.useCallback)(function (state) {
        var referenceResource = (0, reducer_1.getReferenceResource)(state, {
            reference: reference,
        });
        if (
        // resources are registered
        Object.keys(state.admin.resources).length > 0 &&
            // no registered resource matching the reference
            !referenceResource) {
            throw new Error("Cannot fetch a reference to \"".concat(reference, "\" (unknown resource).\nYou must add <Resource name=\"").concat(reference, "\" /> as child of <Admin> to use \"").concat(reference, "\" in a reference"));
        }
        var possibleValues = (0, reducer_1.getPossibleReferenceValues)(state, {
            referenceSource: referenceSource,
            resource: resource,
            source: source,
        });
        return (0, reducer_1.getPossibleReferences)(referenceResource, possibleValues, [
            id,
        ]);
    }, [referenceSource, reference, resource, source, id]);
    return (0, react_redux_1.useSelector)(getMatchingReferences);
};