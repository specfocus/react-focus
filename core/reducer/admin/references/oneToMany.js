"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameRelatedTo = exports.getReferencesByIds = exports.getReferences = exports.getTotal = exports.getIds = void 0;
var actions_1 = require("../../../actions");
var core_1 = require("../../../core");
var initialState = {};
var oneToManyReducer = function (previousState, action) {
    var _a;
    if (previousState === void 0) { previousState = initialState; }
    if (action.meta && action.meta.optimistic) {
        var relatedTo = getRelatedReferences(previousState, action.meta.resource);
        if (action.meta.fetch === core_1.DELETE) {
            return relatedTo.reduce(removeDeletedReferences([action.payload.id]), previousState);
        }
        if (action.meta.fetch === core_1.DELETE_MANY) {
            return relatedTo.reduce(removeDeletedReferences(action.payload.ids), previousState);
        }
    }
    switch (action.type) {
        case actions_1.CRUD_GET_MANY_REFERENCE_SUCCESS:
            return __assign(__assign({}, previousState), (_a = {}, _a[action.meta.relatedTo] = {
                ids: action.payload.data.map(function (record) { return record.id; }),
                total: action.payload.total,
            }, _a));
        default:
            return previousState;
    }
};
var getIds = function (state, relatedTo) {
    return state.admin.references.oneToMany[relatedTo] &&
        state.admin.references.oneToMany[relatedTo].ids;
};
exports.getIds = getIds;
var getTotal = function (state, relatedTo) {
    return state.admin.references.oneToMany[relatedTo] &&
        state.admin.references.oneToMany[relatedTo].total;
};
exports.getTotal = getTotal;
var getReferences = function (state, reference, relatedTo) {
    var ids = (0, exports.getIds)(state, relatedTo);
    if (typeof ids === 'undefined') {
        return undefined;
    }
    if (!state.admin.resources[reference]) {
        // eslint-disable-next-line no-console
        console.error("Invalid Resource \"".concat(reference, "\"\n") +
            "You are trying to display or edit a field of a resource called \"".concat(reference, "\", ") +
            'but it has not been declared.\n' +
            "Declare this resource in the Admin or check the 'reference' prop of ReferenceArrayField and ReferenceManyField.", { ids: ids });
    }
    return ids
        .map(function (id) {
        var resource = state.admin.resources[reference];
        if (!resource) {
            return undefined;
        }
        return resource.data[id];
    })
        .filter(function (r) { return typeof r !== 'undefined'; })
        .reduce(function (prev, record) {
        prev[record.id] = record; // eslint-disable-line no-param-reassign
        return prev;
    }, {});
};
exports.getReferences = getReferences;
var getReferencesByIds = function (state, reference, ids) {
    if (ids.length === 0) {
        return {};
    }
    if (!state.admin.resources[reference]) {
        // eslint-disable-next-line no-console
        console.error("Invalid Resource \"".concat(reference, "\"\n") +
            "You are trying to display or edit a field of a resource called \"".concat(reference, "\", ") +
            'but it has not been declared.\n' +
            "Declare this resource in the Admin or check the 'reference' prop of ReferenceArrayField.", { ids: ids });
    }
    var references = ids
        .map(function (id) {
        var resource = state.admin.resources[reference];
        if (!resource) {
            return undefined;
        }
        return resource.data[id];
    })
        .filter(function (r) { return typeof r !== 'undefined'; })
        .reduce(function (prev, record) {
        prev[record.id] = record; // eslint-disable-line no-param-reassign
        return prev;
    }, {});
    return Object.keys(references).length > 0 ? references : null;
};
exports.getReferencesByIds = getReferencesByIds;
var getRelatedReferences = function (previousState, resource) { return Object.keys(previousState).filter(function (key) { return key.includes(resource); }); };
var removeDeletedReferences = function (removedIds) { return function (previousState, key) {
    var _a;
    var idsToKeep = previousState[key].ids.filter(function (id) { return !removedIds.includes(id); });
    if (idsToKeep.length === previousState[key].ids.length) {
        return previousState;
    }
    return __assign(__assign({}, previousState), (_a = {}, _a[key] = {
        ids: idsToKeep,
        total: idsToKeep.length,
    }, _a));
}; };
var nameRelatedTo = function (reference, id, resource, target, filter) {
    if (filter === void 0) { filter = {}; }
    var keys = Object.keys(filter);
    if (!keys.length) {
        return "".concat(resource, "_").concat(reference, "@").concat(target, "_").concat(id);
    }
    return "".concat(resource, "_").concat(reference, "@").concat(target, "_").concat(id, "?").concat(keys
        .map(function (key) { return "".concat(key, "=").concat(JSON.stringify(filter[key])); })
        .join('&'));
};
exports.nameRelatedTo = nameRelatedTo;
exports.default = oneToManyReducer;
