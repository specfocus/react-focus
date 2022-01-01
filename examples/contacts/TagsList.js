"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/styles");
const app_1 = require("../../app");
const ColoredChipField = (_a) => {
    var { record } = _a, props = __rest(_a, ["record"]);
    return record ? ((0, jsx_runtime_1.jsx)(app_1.ChipField, Object.assign({ record: record }, props, { style: { backgroundColor: record.color, border: 0 }, component: "span" }), void 0)) : null;
};
const useStyles = (0, styles_1.makeStyles)({
    root: {
        display: 'inline-block',
    },
});
const TagsList = ({ record }) => {
    const classes = useStyles();
    if (!record)
        return null;
    return ((0, jsx_runtime_1.jsx)(app_1.ReferenceArrayField, Object.assign({ record: record, basePath: "/contacts", resource: "contacts", source: "tags", reference: "tags", className: classes.root }, { children: (0, jsx_runtime_1.jsx)(app_1.SingleFieldList, Object.assign({ linkType: false, component: "span" }, { children: (0, jsx_runtime_1.jsx)(ColoredChipField, { source: "name", variant: "outlined", size: "small" }, void 0) }), void 0) }), void 0));
};
exports.TagsList = TagsList;
