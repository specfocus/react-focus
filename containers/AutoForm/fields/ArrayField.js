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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var TranslatedChip_1 = __importDefault(require("../../../components/TranslatedChip"));
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var StringSchema_1 = require("../../../lib/StringSchema");
var ArrayField = function (_a) {
    var _b, _c;
    var api = _a.api, dependencies = _a.dependencies, dispatch = _a.dispatch, name = _a.name, readonly = _a.readonly, schema = _a.schema, value = _a.value, variant = _a.variant;
    console.log('ARRAY field', name, schema.items.type, variant);
    var props = (0, react_1.useMemo)(function () { return (value || []).map(function (item, index) {
        var props = { label: JSON.stringify(item), value: item };
        if (schema.items.type === StringSchema_1.STRING_TYPE) {
            Object.assign(props, { label: String(item) });
        }
        if (variant === 'chip') {
            Object.assign(props, { variant: 'outlined' });
        }
        if (readonly) {
        }
        else {
            Object.assign(props, {
                onDelete: function () { return dispatch({ type: 'REMOVE_ITEM', form: api, name: name, index: index, value: value, values: dependencies }); }
            });
        }
        return props;
    }); }, [readonly, (_b = schema.items) === null || _b === void 0 ? void 0 : _b.type, value, variant]);
    switch ((_c = schema.items) === null || _c === void 0 ? void 0 : _c.type) {
        case StringSchema_1.STRING_TYPE:
            switch (variant) {
                case 'chip':
                    return (react_1.default.createElement(Grid_1.default, { container: true, direction: "row", spacing: 1 }, props.map(function (props, idx) { return (react_1.default.createElement(Grid_1.default, { item: true, key: String(idx) },
                        react_1.default.createElement(TranslatedChip_1.default, __assign({}, props)))); })));
            }
            break;
    }
    return (react_1.default.createElement("ul", null, (value || []).map(function (item, idx) { return (react_1.default.createElement("li", { key: String(idx) }, JSON.stringify(item))); })));
};
exports.default = ArrayField;
