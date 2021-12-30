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
exports.EnumField = void 0;
var Button_1 = __importDefault(require("@mui/material/Button"));
var InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
var react_1 = __importStar(require("react"));
var react_final_form_1 = require("react-final-form");
var useStyles_1 = __importDefault(require("../../../app/useStyles"));
var Autocomplete_1 = require("../../../components/final-form/Autocomplete");
var TextField_1 = require("../../../components/final-form/TextField");
var EnumField = function (_a) {
    var api = _a.api, domain = _a.domain, disabled = _a.disabled, dispatch = _a.dispatch, filter = _a.filter, label = _a.label, name = _a.name, placeholder = _a.placeholder, readonly = _a.readonly, schema = _a.schema, t = _a.t, value = _a.value, values = _a.values;
    var classes = (0, useStyles_1.default)();
    var renderOption = function (option, _a) {
        var inputValue = _a.inputValue, selected = _a.selected;
        var text = domain.getOptionText ? domain.getOptionText(option, t) : String(option);
        console.log('RENDERING OPTION', text);
        if (!domain.getOptionIcon) {
            return (react_1.default.createElement(react_1.default.Fragment, null, text));
        }
        var icon = domain.getOptionIcon(option);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("span", null, icon),
            text));
    };
    var form = (0, react_final_form_1.useForm)();
    // https://docs.react-async.com/guide/async-components
    var getOptionLabel = domain.getOptionLabel, getOptions = domain.getOptions, getOptionSelected = domain.getOptionSelected, getOptionValue = domain.getOptionValue, isOptionEqualToValue = domain.isOptionEqualToValue;
    /*
    const options = useAsync<any[]>({
      promiseFn: getOptions,
      ...{ value: filter },
      watch: filter
    });*/
    var _b = (0, react_1.useState)({ data: [] }), options = _b[0], setOptions = _b[1];
    (0, react_1.useEffect)(function () {
        form.change(name);
        getOptions({ value: filter }).then(function (data) { return setOptions({ filter: filter, data: data, isResolved: true }); });
    }, [filter, setOptions]);
    var onActionClick = (0, react_1.useCallback)(function () {
        if (schema.action && value) {
            console.log({ name: name, value: value });
            dispatch(__assign({ form: api, name: name, value: value, values: values }, schema.action));
            api.resetFieldState(name);
            api.change(name);
        }
    }, [api, dispatch, schema, value, values]);
    if (readonly) {
        return (react_1.default.createElement(TextField_1.TextField, { disabled: true, label: label, name: name, InputProps: {
                readOnly: true,
                'aria-readonly': true
            }, value: getOptionLabel(value), variant: "outlined" }));
    }
    var moreProps = {};
    if (schema.action) {
        Object.assign(moreProps, {
            getOptionDisabled: function (option) {
                var _a;
                var target = (_a = schema.action.payload) === null || _a === void 0 ? void 0 : _a.target;
                var disable = target ? values[target] : [];
                var val = getOptionValue ? getOptionValue(option) : option;
                var disabled = Array.isArray(disable) && disable.includes(val);
                console.log({ disabled: disabled, val: val, disable: disable, target: target, values: values });
                return disabled;
            }
        });
        if (value) {
            Object.assign(moreProps, {
                // value,
                textFieldProps: {
                    InputProps: {
                        endAdornment: (react_1.default.createElement(InputAdornment_1.default, { position: "end" },
                            react_1.default.createElement(Button_1.default, { disabled: !value, onClick: onActionClick, "aria-label": "search", variant: "contained", size: "small" }, "Add")))
                    }
                }
            });
        }
    }
    if (domain.canAutocomplete) {
        return (react_1.default.createElement(Autocomplete_1.Autocomplete, __assign({ classes: {
                option: classes.option,
            }, disabled: disabled || !options.isResolved, freeSolo: domain.canFreeSolo, label: label, name: name, options: options.data || [], placeholder: placeholder, getOptionLabel: getOptionLabel, getOptionValue: getOptionValue, isOptionEqualToValue: isOptionEqualToValue, renderOption: renderOption }, moreProps)));
    }
    return (react_1.default.createElement(Autocomplete_1.Autocomplete, __assign({ classes: {
            option: classes.option,
        }, disabled: disabled || !options.isResolved, freeSolo: domain.canFreeSolo, label: label, name: name, options: options.data || [], placeholder: placeholder, getOptionLabel: getOptionLabel, getOptionValue: (getOptionValue), isOptionEqualToValue: isOptionEqualToValue }, moreProps)));
};
exports.EnumField = EnumField;
exports.default = exports.EnumField;
