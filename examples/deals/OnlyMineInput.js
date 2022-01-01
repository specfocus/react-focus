"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyMineInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(1),
    },
}));
const OnlyMineInput = ({ alwaysOn }) => {
    const { filterValues, displayedFilters, setFilters, } = (0, app_1.useListFilterContext)();
    const { identity } = (0, app_1.useGetIdentity)();
    const classes = useStyles();
    const handleChange = () => {
        const newFilterValues = Object.assign({}, filterValues);
        if (typeof filterValues.sales_id !== 'undefined') {
            delete newFilterValues.sales_id;
        }
        else {
            newFilterValues.sales_id = identity && (identity === null || identity === void 0 ? void 0 : identity.id);
        }
        setFilters(newFilterValues, displayedFilters);
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.root }, { children: (0, jsx_runtime_1.jsx)(material_1.FormControlLabel, { control: (0, jsx_runtime_1.jsx)(material_1.Switch, { checked: typeof filterValues.sales_id !== 'undefined', onChange: handleChange, color: "primary", name: "checkedC" }, void 0), label: "Only companies I manage" }, void 0) }), void 0));
};
exports.OnlyMineInput = OnlyMineInput;
exports.OnlyMineInput.defaultProps = { source: 'sales_id' };
