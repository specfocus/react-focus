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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyMineInput = void 0;
var React = __importStar(require("react"));
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    root: {
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(1),
    },
}); });
var OnlyMineInput = function (_a) {
    var alwaysOn = _a.alwaysOn;
    var _b = (0, app_1.useListFilterContext)(), filterValues = _b.filterValues, displayedFilters = _b.displayedFilters, setFilters = _b.setFilters;
    var identity = (0, app_1.useGetIdentity)().identity;
    var classes = useStyles();
    var handleChange = function () {
        var newFilterValues = __assign({}, filterValues);
        if (typeof filterValues.sales_id !== 'undefined') {
            delete newFilterValues.sales_id;
        }
        else {
            newFilterValues.sales_id = identity && (identity === null || identity === void 0 ? void 0 : identity.id);
        }
        setFilters(newFilterValues, displayedFilters);
    };
    return (React.createElement("div", { className: classes.root },
        React.createElement(material_1.FormControlLabel, { control: React.createElement(material_1.Switch, { checked: typeof filterValues.sales_id !== 'undefined', onChange: handleChange, color: "primary", name: "checkedC" }), label: "Only companies I manage" })));
};
exports.OnlyMineInput = OnlyMineInput;
exports.OnlyMineInput.defaultProps = { source: 'sales_id' };
