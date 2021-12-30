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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutocompleteInput = void 0;
var react_1 = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var downshift_1 = __importDefault(require("downshift"));
var get_1 = __importDefault(require("lodash/get"));
var classnames_1 = __importDefault(require("classnames"));
var material_1 = require("@mui/material");
var Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
var core_1 = require("../../core");
var InputHelperText_1 = __importDefault(require("./InputHelperText"));
var AutocompleteSuggestionList_1 = __importDefault(require("./AutocompleteSuggestionList"));
var AutocompleteSuggestionItem_1 = __importDefault(require("./AutocompleteSuggestionItem"));
var AutocompleteInputLoader_1 = require("./AutocompleteInputLoader");
var useSupportCreateSuggestion_1 = require("./useSupportCreateSuggestion");
var PREFIX = 'MyAutocompleteInput';
var classes = {
    container: "".concat(PREFIX, "-container"),
    clearIcon: "".concat(PREFIX, "-clearIcon"),
    visibleClearIcon: "".concat(PREFIX, "-visibleClearIcon"),
    clearButton: "".concat(PREFIX, "-clearButton"),
    selectAdornment: "".concat(PREFIX, "-selectAdornment"),
    inputAdornedEnd: "".concat(PREFIX, "-inputAdornedEnd"),
    suggestionsContainer: "".concat(PREFIX, "-suggestionsContainer"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.container)] = {
            flexGrow: 1,
            position: 'relative',
        },
        _b["& .".concat(classes.clearIcon)] = {
            height: 16,
            width: 0,
        },
        _b["& .".concat(classes.visibleClearIcon)] = {
            width: 16,
        },
        _b["& .".concat(classes.clearButton)] = {
            height: 24,
            width: 24,
            padding: 0,
        },
        _b["& .".concat(classes.selectAdornment)] = {
            position: 'absolute',
            right: 24,
        },
        _b["& .".concat(classes.inputAdornedEnd)] = {
            paddingRight: 0,
        },
        _b["& .".concat(classes.suggestionsContainer)] = {
            zIndex: theme.zIndex.modal,
        },
        _b);
});
/**
 * An Input component for an autocomplete field, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property as the option text
 * @example
 * const choices = [
 *    { id: 'M', name: 'Male' },
 *    { id: 'F', name: 'Female' },
 * ];
 * <AutocompleteInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <AutocompleteInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <AutocompleteInput source="author_id" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * Note that you must also specify the `matchSuggestion` prop
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const matchSuggestion = (filterValue, choice) => choice.first_name.match(filterValue) || choice.last_name.match(filterValue);
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <SelectInput source="gender" choices={choices} optionText={<FullNameField />} matchSuggestion={matchSuggestion} />
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'M', name: 'myroot.gender.male' },
 *    { id: 'F', name: 'myroot.gender.female' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceInput>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <AutocompleteInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <TextField> component
 *
 * @example
 * <AutocompleteInput source="author_id" options={{ color: 'secondary', InputLabelProps: { shrink: true } }} />
 */
var AutocompleteInput = function (props) {
    var allowEmpty = props.allowEmpty, className = props.className, classesOverride = props.classes, clearAlwaysVisible = props.clearAlwaysVisible, _a = props.choices, choices = _a === void 0 ? [] : _a, createLabel = props.createLabel, createItemLabel = props.createItemLabel, createValue = props.createValue, create = props.create, disabled = props.disabled, emptyText = props.emptyText, emptyValue = props.emptyValue, format = props.format, fullWidth = props.fullWidth, helperText = props.helperText, idOverride = props.id, inputOverride = props.input, inputText = props.inputText, isRequiredOverride = props.isRequired, label = props.label, limitChoicesToValue = props.limitChoicesToValue, loaded = props.loaded, loading = props.loading, _b = props.margin, margin = _b === void 0 ? 'dense' : _b, matchSuggestion = props.matchSuggestion, metaOverride = props.meta, onBlur = props.onBlur, onChange = props.onChange, onCreate = props.onCreate, onFocus = props.onFocus, _c = props.options, _d = _c === void 0 ? {
        suggestionsContainerProps: undefined,
        labelProps: undefined,
        InputProps: undefined,
    } : _c, suggestionsContainerProps = _d.suggestionsContainerProps, labelProps = _d.labelProps, InputProps = _d.InputProps, options = __rest(_d, ["suggestionsContainerProps", "labelProps", "InputProps"]), _e = props.optionText, optionText = _e === void 0 ? 'name' : _e, _f = props.optionValue, optionValue = _f === void 0 ? 'id' : _f, parse = props.parse, refetch = props.refetch, resettable = props.resettable, resource = props.resource, setFilter = props.setFilter, shouldRenderSuggestionsOverride = props.shouldRenderSuggestions, source = props.source, suggestionLimit = props.suggestionLimit, _g = props.translateChoice, translateChoice = _g === void 0 ? true : _g, validate = props.validate, _h = props.variant, variant = _h === void 0 ? 'filled' : _h, rest = __rest(props, ["allowEmpty", "className", "classes", "clearAlwaysVisible", "choices", "createLabel", "createItemLabel", "createValue", "create", "disabled", "emptyText", "emptyValue", "format", "fullWidth", "helperText", "id", "input", "inputText", "isRequired", "label", "limitChoicesToValue", "loaded", "loading", "margin", "matchSuggestion", "meta", "onBlur", "onChange", "onCreate", "onFocus", "options", "optionText", "optionValue", "parse", "refetch", "resettable", "resource", "setFilter", "shouldRenderSuggestions", "source", "suggestionLimit", "translateChoice", "validate", "variant"]);
    if ((0, react_1.isValidElement)(optionText) && !inputText) {
        throw new Error("If the optionText prop is a React element, you must also specify the inputText prop:\n        <AutocompleteInput\n            inputText={(record) => record.title}\n        />");
    }
    (0, core_1.warning)((0, react_1.isValidElement)(optionText) && !matchSuggestion, "If the optionText prop is a React element, you must also specify the matchSuggestion prop:\n<AutocompleteInput\n    matchSuggestion={(filterValue, suggestion) => true}\n/>\n        ");
    (0, core_1.warning)(source === undefined, "If you're not wrapping the AutocompleteInput inside a ReferenceInput, you must provide the source prop");
    (0, core_1.warning)(choices === undefined, "If you're not wrapping the AutocompleteInput inside a ReferenceInput, you must provide the choices prop");
    var inputEl = (0, react_1.useRef)();
    var anchorEl = (0, react_1.useRef)();
    var translate = (0, core_1.useTranslate)();
    var _j = (0, core_1.useInput)(__assign({ format: format, id: idOverride, input: inputOverride, meta: metaOverride, onBlur: onBlur, onChange: onChange, onFocus: onFocus, parse: parse, resource: resource, source: source, validate: validate }, rest)), id = _j.id, input = _j.input, isRequired = _j.isRequired, _k = _j.meta, touched = _k.touched, error = _k.error, submitError = _k.submitError;
    var _l = (0, react_1.useState)(''), filterValue = _l[0], setFilterValue = _l[1];
    var getSuggestionFromValue = (0, react_1.useCallback)(function (value) { return choices.find(function (choice) { return (0, get_1.default)(choice, optionValue) === value; }); }, [choices, optionValue]);
    var selectedItem = (0, react_1.useMemo)(function () { return getSuggestionFromValue(input.value) || null; }, [input.value, getSuggestionFromValue]);
    var _m = (0, core_1.useSuggestions)({
        allowEmpty: allowEmpty,
        choices: choices,
        emptyText: emptyText,
        emptyValue: emptyValue,
        limitChoicesToValue: limitChoicesToValue,
        matchSuggestion: matchSuggestion,
        optionText: optionText,
        optionValue: optionValue,
        selectedItem: selectedItem,
        suggestionLimit: suggestionLimit,
        translateChoice: translateChoice,
    }), getChoiceText = _m.getChoiceText, getChoiceValue = _m.getChoiceValue, getSuggestions = _m.getSuggestions;
    var handleChange = (0, react_1.useCallback)(function (item, newItem) { return __awaiter(void 0, void 0, void 0, function () {
        var value;
        return __generator(this, function (_a) {
            value = getChoiceValue(newItem || item);
            if (value == null && filterValue) {
                setFilterValue('');
            }
            input.onChange(value);
            return [2 /*return*/];
        });
    }); }, [filterValue, getChoiceValue, input]);
    var _o = (0, useSupportCreateSuggestion_1.useSupportCreateSuggestion)({
        create: create,
        createLabel: createLabel,
        createItemLabel: createItemLabel,
        createValue: createValue,
        handleChange: handleChange,
        filter: filterValue,
        onCreate: onCreate,
        optionText: optionText,
    }), getCreateItem = _o.getCreateItem, handleChangeWithCreateSupport = _o.handleChange, createElement = _o.createElement;
    var handleFilterChange = (0, react_1.useCallback)(function (eventOrValue) {
        var event = eventOrValue;
        var value = event.target
            ? event.target.value
            : eventOrValue;
        if (setFilter) {
            setFilter(value);
        }
    }, [setFilter]);
    // We must reset the filter every time the value changes to ensure we
    // display at least some choices even if the input has a value.
    // Otherwise, it would only display the currently selected one and the user
    // would have to first clear the input before seeing any other choices
    (0, react_1.useEffect)(function () {
        handleFilterChange('');
        // If we have a value, set the filter to its text so that
        // Downshift displays it correctly
        setFilterValue(typeof input.value === 'undefined' ||
            input.value === null ||
            selectedItem === null
            ? ''
            : inputText
                ? inputText(getChoiceText(selectedItem).props.record)
                : getChoiceText(selectedItem));
    }, [
        input.value,
        handleFilterChange,
        selectedItem,
        getChoiceText,
        inputText,
    ]);
    // This function ensures that the suggestion list stay aligned to the
    // input element even if it moves (because user scrolled for example)
    var updateAnchorEl = function () {
        if (!inputEl.current) {
            return;
        }
        var inputPosition = inputEl.current.getBoundingClientRect();
        // It works by implementing a mock element providing the only method used
        // by the PopOver component, getBoundingClientRect, which will return a
        // position based on the input position
        if (!anchorEl.current) {
            anchorEl.current = { getBoundingClientRect: function () { return inputPosition; } };
        }
        else {
            var anchorPosition = anchorEl.current.getBoundingClientRect();
            if (anchorPosition.x !== inputPosition.x ||
                anchorPosition.y !== inputPosition.y) {
                anchorEl.current = {
                    getBoundingClientRect: function () { return inputPosition; },
                };
            }
        }
    };
    var storeInputRef = function (input) {
        inputEl.current = input;
        updateAnchorEl();
    };
    var handleBlur = (0, react_1.useCallback)(function (event) {
        handleFilterChange('');
        // If we had a value before, set the filter back to its text so that
        // Downshift displays it correctly
        setFilterValue(input.value
            ? inputText
                ? inputText(getChoiceText(selectedItem).props.record)
                : getChoiceText(selectedItem)
            : '');
        input.onBlur(event);
    }, [getChoiceText, handleFilterChange, input, inputText, selectedItem]);
    var handleFocus = (0, react_1.useCallback)(function (openMenu) { return function (event) {
        openMenu(event);
        input.onFocus(event);
    }; }, [input]);
    var shouldRenderSuggestions = function (val) {
        if (shouldRenderSuggestionsOverride !== undefined &&
            typeof shouldRenderSuggestionsOverride === 'function') {
            return shouldRenderSuggestionsOverride(val);
        }
        return true;
    };
    var _p = InputProps || {}, endAdornment = _p.endAdornment, inputRef = _p.inputRef, InputPropsWithoutEndAdornment = __rest(_p, ["endAdornment", "inputRef"]);
    var handleClickClearButton = (0, react_1.useCallback)(function (openMenu) { return function (event) {
        event.stopPropagation();
        setFilterValue('');
        input.onChange('');
        openMenu(event);
        input.onFocus(event);
    }; }, [input]);
    var getEndAdornment = function (openMenu) {
        var _a;
        if (!resettable) {
            if (endAdornment) {
                return endAdornment;
            }
            if (loading) {
                return react_1.default.createElement(AutocompleteInputLoader_1.AutocompleteInputLoader, null);
            }
        }
        else if (!filterValue) {
            var label_1 = translate('ra.action.clear_input_value');
            if (clearAlwaysVisible) {
                // show clear button, inactive
                return (react_1.default.createElement(material_1.InputAdornment, { position: "end" },
                    react_1.default.createElement(material_1.IconButton, { className: classes.clearButton, "aria-label": label_1, title: label_1, disableRipple: true, disabled: true, size: "large" },
                        react_1.default.createElement(Clear_1.default, { className: (0, classnames_1.default)(classes.clearIcon, classes.visibleClearIcon) })),
                    loading && react_1.default.createElement(AutocompleteInputLoader_1.AutocompleteInputLoader, null)));
            }
            else {
                if (endAdornment) {
                    return endAdornment;
                }
                else {
                    // show spacer
                    return (react_1.default.createElement(material_1.InputAdornment, { position: "end" },
                        react_1.default.createElement("span", { className: classes.clearButton }, "\u00A0"),
                        loading && react_1.default.createElement(AutocompleteInputLoader_1.AutocompleteInputLoader, null)));
                }
            }
        }
        else {
            // show clear
            var label_2 = translate('ra.action.clear_input_value');
            return (react_1.default.createElement(material_1.InputAdornment, { position: "end" },
                react_1.default.createElement(material_1.IconButton, { className: classes.clearButton, "aria-label": label_2, title: label_2, disableRipple: true, onClick: handleClickClearButton(openMenu), onMouseDown: handleMouseDownClearButton, disabled: disabled, size: "large" },
                    react_1.default.createElement(Clear_1.default, { className: (0, classnames_1.default)(classes.clearIcon, (_a = {},
                            _a[classes.visibleClearIcon] = clearAlwaysVisible || filterValue,
                            _a)) })),
                loading && react_1.default.createElement(AutocompleteInputLoader_1.AutocompleteInputLoader, null)));
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(downshift_1.default, __assign({ inputValue: filterValue, onChange: handleChangeWithCreateSupport, selectedItem: selectedItem, itemToString: function (item) { return getChoiceValue(item); } }, rest), function (_a) {
            var getInputProps = _a.getInputProps, getItemProps = _a.getItemProps, getLabelProps = _a.getLabelProps, getMenuProps = _a.getMenuProps, getRootProps = _a.getRootProps, isOpen = _a.isOpen, highlightedIndex = _a.highlightedIndex, openMenu = _a.openMenu;
            var isMenuOpen = isOpen && shouldRenderSuggestions(filterValue);
            var _b = getInputProps(__assign({ onBlur: handleBlur, onFocus: handleFocus(openMenu) }, InputProps)), downshiftId = _b.id, // We want to ignore this to correctly link our label and the input
            value = _b.value, onBlur = _b.onBlur, onChange = _b.onChange, onFocus = _b.onFocus, ref = _b.ref, size = _b.size, color = _b.color, inputProps = __rest(_b, ["id", "value", "onBlur", "onChange", "onFocus", "ref", "size", "color"]);
            var suggestions = __spreadArray(__spreadArray([], getSuggestions(filterValue), true), (onCreate || create ? [getCreateItem()] : []), true);
            return (react_1.default.createElement(Root, __assign({ className: classes.container }, getRootProps()),
                react_1.default.createElement(material_1.TextField, __assign({ id: id, name: input.name, InputProps: __assign({ inputRef: (0, core_1.mergeRefs)([
                            storeInputRef,
                            inputRef,
                        ]), endAdornment: getEndAdornment(openMenu), onBlur: onBlur, onChange: function (event) {
                            setFilterValue(event.target.value);
                            handleFilterChange(event);
                            onChange(event);
                        }, onFocus: onFocus }, InputPropsWithoutEndAdornment), error: !!(touched && (error || submitError)), label: react_1.default.createElement(core_1.FieldTitle, __assign({ label: label }, labelProps, { source: source, resource: resource, isRequired: typeof isRequiredOverride !==
                            'undefined'
                            ? isRequiredOverride
                            : isRequired })), InputLabelProps: getLabelProps({
                        htmlFor: id,
                    }), helperText: react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }), disabled: disabled, variant: variant, margin: margin, fullWidth: fullWidth, value: filterValue, className: className, size: size, color: color }, inputProps, options)),
                react_1.default.createElement(AutocompleteSuggestionList_1.default, { isOpen: isMenuOpen, menuProps: getMenuProps({}, 
                    // https://github.com/downshift-js/downshift/issues/235
                    { suppressRefError: true }), inputEl: inputEl.current, suggestionsContainerProps: suggestionsContainerProps, className: classes.suggestionsContainer }, suggestions.map(function (suggestion, index) { return (react_1.default.createElement(AutocompleteSuggestionItem_1.default, __assign({ key: getChoiceValue(suggestion), suggestion: suggestion, index: index, highlightedIndex: highlightedIndex, isSelected: input.value ===
                        getChoiceValue(suggestion), filterValue: filterValue, getSuggestionText: getChoiceText, createValue: createValue }, getItemProps({
                    item: suggestion,
                })))); }))));
        }),
        createElement));
};
exports.AutocompleteInput = AutocompleteInput;
var handleMouseDownClearButton = function (event) {
    event.preventDefault();
};
