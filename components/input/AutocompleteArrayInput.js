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
var react_1 = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var downshift_1 = __importDefault(require("downshift"));
var classnames_1 = __importDefault(require("classnames"));
var get_1 = __importDefault(require("lodash/get"));
var material_1 = require("@mui/material");
var core_1 = require("../../core");
var debounce_1 = __importDefault(require("lodash/debounce"));
var InputHelperText_1 = __importDefault(require("./InputHelperText"));
var AutocompleteSuggestionList_1 = __importDefault(require("./AutocompleteSuggestionList"));
var AutocompleteSuggestionItem_1 = __importDefault(require("./AutocompleteSuggestionItem"));
var AutocompleteInputLoader_1 = require("./AutocompleteInputLoader");
var useSupportCreateSuggestion_1 = require("./useSupportCreateSuggestion");
var PREFIX = 'RaAutocompleteArrayInput';
var classes = {
    container: "".concat(PREFIX, "-container"),
    suggestionsContainer: "".concat(PREFIX, "-suggestionsContainer"),
    chip: "".concat(PREFIX, "-chip"),
    chipContainerFilled: "".concat(PREFIX, "-chipContainerFilled"),
    chipContainerOutlined: "".concat(PREFIX, "-chipContainerOutlined"),
    inputRoot: "".concat(PREFIX, "-inputRoot"),
    inputRootFilled: "".concat(PREFIX, "-inputRootFilled"),
    inputInput: "".concat(PREFIX, "-inputInput"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.container)] = {
            flexGrow: 1,
            position: 'relative',
        },
        _b["& .".concat(classes.suggestionsContainer)] = {
            zIndex: theme.zIndex.modal,
        },
        _b["& .".concat(classes.chip)] = {
            margin: theme.spacing(0.5, 0.5, 0.5, 0),
        },
        _b["& .".concat(classes.chipContainerFilled)] = {
            margin: '27px 12px 10px 0',
        },
        _b["& .".concat(classes.chipContainerOutlined)] = {
            margin: '12px 12px 10px 0',
        },
        _b["& .".concat(classes.inputRoot)] = {
            flexWrap: 'wrap',
        },
        _b["& .".concat(classes.inputRootFilled)] = {
            flexWrap: 'wrap',
            '& $chip': {
                backgroundColor: theme.palette.mode === 'light'
                    ? 'rgba(0, 0, 0, 0.09)'
                    : 'rgba(255, 255, 255, 0.09)',
            },
        },
        _b["& .".concat(classes.inputInput)] = {
            width: 'auto',
            flexGrow: 1,
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
 * <AutocompleteArrayInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <AutocompleteArrayInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <AutocompleteArrayInput source="author_id" choices={choices} optionText={optionRenderer} />
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
 * <AutocompleteArrayInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <TextField> component
 *
 * @example
 * <AutocompleteArrayInput source="author_id" options={{ color: 'secondary' }} />
 */
var AutocompleteArrayInput = function (props) {
    var allowDuplicates = props.allowDuplicates, allowEmpty = props.allowEmpty, _a = props.choices, choices = _a === void 0 ? [] : _a, create = props.create, createLabel = props.createLabel, createItemLabel = props.createItemLabel, createValue = props.createValue, _b = props.debounce, debounceDelay = _b === void 0 ? 250 : _b, disabled = props.disabled, emptyText = props.emptyText, emptyValue = props.emptyValue, format = props.format, fullWidth = props.fullWidth, helperText = props.helperText, idOverride = props.id, inputOverride = props.input, isRequiredOverride = props.isRequired, label = props.label, loaded = props.loaded, loading = props.loading, limitChoicesToValue = props.limitChoicesToValue, _c = props.margin, margin = _c === void 0 ? 'dense' : _c, matchSuggestion = props.matchSuggestion, metaOverride = props.meta, onBlur = props.onBlur, onChange = props.onChange, onCreate = props.onCreate, onFocus = props.onFocus, _d = props.options, _e = _d === void 0 ? {} : _d, suggestionsContainerProps = _e.suggestionsContainerProps, labelProps = _e.labelProps, InputProps = _e.InputProps, options = __rest(_e, ["suggestionsContainerProps", "labelProps", "InputProps"]), _f = props.optionText, optionText = _f === void 0 ? 'name' : _f, _g = props.optionValue, optionValue = _g === void 0 ? 'id' : _g, parse = props.parse, resource = props.resource, setFilter = props.setFilter, shouldRenderSuggestionsOverride = props.shouldRenderSuggestions, source = props.source, suggestionLimit = props.suggestionLimit, _h = props.translateChoice, translateChoice = _h === void 0 ? true : _h, validate = props.validate, _j = props.variant, variant = _j === void 0 ? 'filled' : _j, rest = __rest(props, ["allowDuplicates", "allowEmpty", "choices", "create", "createLabel", "createItemLabel", "createValue", "debounce", "disabled", "emptyText", "emptyValue", "format", "fullWidth", "helperText", "id", "input", "isRequired", "label", "loaded", "loading", "limitChoicesToValue", "margin", "matchSuggestion", "meta", "onBlur", "onChange", "onCreate", "onFocus", "options", "optionText", "optionValue", "parse", "resource", "setFilter", "shouldRenderSuggestions", "source", "suggestionLimit", "translateChoice", "validate", "variant"]);
    (0, core_1.warning)((0, react_1.isValidElement)(optionText) && !matchSuggestion, "If the optionText prop is a React element, you must also specify the matchSuggestion prop:\n<AutocompleteArrayInput\n    matchSuggestion={(filterValue, suggestion) => true}\n/>\n        ");
    (0, core_1.warning)(source === undefined, "If you're not wrapping the AutocompleteArrayInput inside a ReferenceArrayInput, you must provide the source prop");
    (0, core_1.warning)(choices === undefined, "If you're not wrapping the AutocompleteArrayInput inside a ReferenceArrayInput, you must provide the choices prop");
    var inputEl = (0, react_1.useRef)();
    var anchorEl = (0, react_1.useRef)();
    var _k = (0, core_1.useInput)(__assign({ format: format, id: idOverride, input: inputOverride, meta: metaOverride, onBlur: onBlur, onChange: onChange, onFocus: onFocus, parse: parse, resource: resource, source: source, validate: validate }, rest)), id = _k.id, input = _k.input, isRequired = _k.isRequired, _l = _k.meta, touched = _l.touched, error = _l.error, submitError = _l.submitError;
    var values = input.value || emptyArray;
    var _m = react_1.default.useState(''), filterValue = _m[0], setFilterValue = _m[1];
    var getSuggestionFromValue = (0, react_1.useCallback)(function (value) { return choices.find(function (choice) { return (0, get_1.default)(choice, optionValue) === value; }); }, [choices, optionValue]);
    var selectedItems = (0, react_1.useMemo)(function () { return values.map(getSuggestionFromValue); }, [
        getSuggestionFromValue,
        values,
    ]);
    var _o = (0, core_1.useSuggestions)({
        allowDuplicates: allowDuplicates,
        allowEmpty: allowEmpty,
        choices: choices,
        emptyText: emptyText,
        emptyValue: emptyValue,
        limitChoicesToValue: limitChoicesToValue,
        matchSuggestion: matchSuggestion,
        optionText: optionText,
        optionValue: optionValue,
        selectedItem: selectedItems,
        suggestionLimit: suggestionLimit,
        translateChoice: translateChoice,
    }), getChoiceText = _o.getChoiceText, getChoiceValue = _o.getChoiceValue, getSuggestions = _o.getSuggestions;
    // eslint-disable-next-line
    var debouncedSetFilter = (0, react_1.useCallback)((0, debounce_1.default)(setFilter || DefaultSetFilter, debounceDelay), [setFilter, debounceDelay]);
    var handleFilterChange = (0, react_1.useCallback)(function (eventOrValue) {
        var event = eventOrValue;
        var value = event.target
            ? event.target.value
            : eventOrValue;
        setFilterValue(value);
        if (setFilter) {
            debouncedSetFilter(value);
        }
    }, [debouncedSetFilter, setFilter, setFilterValue]);
    // We must reset the filter every time the value changes to ensure we
    // display at least some choices even if the input has a value.
    // Otherwise, it would only display the currently selected one and the user
    // would have to first clear the input before seeing any other choices
    (0, react_1.useEffect)(function () {
        handleFilterChange('');
    }, [values.join(','), handleFilterChange]); // eslint-disable-line react-hooks/exhaustive-deps
    var handleKeyDown = (0, react_1.useCallback)(function (event) {
        // Remove latest item from array when user hits backspace with no text
        if (selectedItems.length &&
            !filterValue.length &&
            event.key === 'Backspace') {
            var newSelectedItems = selectedItems.slice(0, selectedItems.length - 1);
            input.onChange(newSelectedItems.map(getChoiceValue));
        }
    }, [filterValue.length, getChoiceValue, input, selectedItems]);
    var handleChange = (0, react_1.useCallback)(function (item, newItem) {
        var finalItem = newItem || item;
        var newSelectedItems = !allowDuplicates && selectedItems.includes(finalItem)
            ? __spreadArray([], selectedItems, true) : __spreadArray(__spreadArray([], selectedItems, true), [finalItem], false);
        setFilterValue('');
        input.onChange(newSelectedItems.map(getChoiceValue));
    }, [allowDuplicates, getChoiceValue, input, selectedItems, setFilterValue]);
    var _p = (0, useSupportCreateSuggestion_1.useSupportCreateSuggestion)({
        create: create,
        createLabel: createLabel,
        createItemLabel: createItemLabel,
        createValue: createValue,
        handleChange: handleChange,
        filter: filterValue,
        onCreate: onCreate,
        optionText: optionText,
    }), getCreateItem = _p.getCreateItem, handleChangeWithCreateSupport = _p.handleChange, createElement = _p.createElement;
    var handleDelete = (0, react_1.useCallback)(function (item) { return function () {
        var newSelectedItems = __spreadArray([], selectedItems, true);
        newSelectedItems.splice(newSelectedItems.indexOf(item), 1);
        input.onChange(newSelectedItems.map(getChoiceValue));
    }; }, [input, selectedItems, getChoiceValue]);
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
        setFilterValue('');
        handleFilterChange('');
        input.onBlur(event);
    }, [handleFilterChange, input, setFilterValue]);
    var handleFocus = (0, react_1.useCallback)(function (openMenu) { return function (event) {
        openMenu(event);
        input.onFocus(event);
    }; }, [input]);
    var handleClick = (0, react_1.useCallback)(function (openMenu) { return function (event) {
        if (event.target === inputEl.current) {
            openMenu(event);
        }
    }; }, []);
    var shouldRenderSuggestions = function (val) {
        if (shouldRenderSuggestionsOverride !== undefined &&
            typeof shouldRenderSuggestionsOverride === 'function') {
            return shouldRenderSuggestionsOverride(val);
        }
        return true;
    };
    var _q = InputProps || {}, inputRef = _q.inputRef, InputPropsWithoutInputRef = __rest(_q, ["inputRef"]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(downshift_1.default, __assign({ inputValue: filterValue, onChange: handleChangeWithCreateSupport, selectedItem: selectedItems, itemToString: function (item) { return getChoiceValue(item); } }, rest), function (_a) {
            var _b, _c;
            var getInputProps = _a.getInputProps, getItemProps = _a.getItemProps, getLabelProps = _a.getLabelProps, getMenuProps = _a.getMenuProps, getRootProps = _a.getRootProps, isOpen = _a.isOpen, suggestionFilter = _a.inputValue, highlightedIndex = _a.highlightedIndex, openMenu = _a.openMenu;
            var isMenuOpen = isOpen && shouldRenderSuggestions(suggestionFilter);
            var _d = getInputProps({
                onBlur: handleBlur,
                onFocus: handleFocus(openMenu),
                onClick: handleClick(openMenu),
                onKeyDown: handleKeyDown,
            }), idFromDownshift = _d.id, onBlur = _d.onBlur, onChange = _d.onChange, onFocus = _d.onFocus, ref = _d.ref, color = _d.color, size = _d.size, inputProps = __rest(_d, ["id", "onBlur", "onChange", "onFocus", "ref", "color", "size"]);
            var suggestions = __spreadArray(__spreadArray([], getSuggestions(suggestionFilter), true), (onCreate || create ? [getCreateItem()] : []), true);
            return (react_1.default.createElement(Root, __assign({ className: classes.container }, getRootProps()),
                react_1.default.createElement(material_1.TextField, __assign({ id: id, fullWidth: fullWidth, InputProps: __assign({ inputRef: (0, core_1.mergeRefs)([
                            storeInputRef,
                            inputRef,
                        ]), classes: {
                            root: (0, classnames_1.default)(classes.inputRoot, (_b = {},
                                _b[classes.inputRootFilled] = variant === 'filled',
                                _b)),
                            input: classes.inputInput,
                        }, startAdornment: (react_1.default.createElement("div", { className: (0, classnames_1.default)((_c = {},
                                _c[classes.chipContainerFilled] = variant === 'filled',
                                _c[classes.chipContainerOutlined] = variant === 'outlined',
                                _c)) }, selectedItems.map(function (item, index) { return (react_1.default.createElement(material_1.Chip, { key: index, tabIndex: -1, label: getChoiceText(item), className: classes.chip, onDelete: handleDelete(item) })); }))), endAdornment: loading && (react_1.default.createElement(AutocompleteInputLoader_1.AutocompleteInputLoader, null)), onBlur: onBlur, onChange: function (event) {
                            handleFilterChange(event);
                            onChange(event);
                        }, onFocus: onFocus }, InputPropsWithoutInputRef), error: !!(touched && (error || submitError)), label: react_1.default.createElement(core_1.FieldTitle, __assign({ label: label }, labelProps, { source: source, resource: resource, isRequired: typeof isRequiredOverride !==
                            'undefined'
                            ? isRequiredOverride
                            : isRequired })), InputLabelProps: getLabelProps({
                        htmlFor: id,
                    }), helperText: react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }), variant: variant, margin: margin, color: color, size: size, disabled: disabled }, inputProps, options)),
                react_1.default.createElement(AutocompleteSuggestionList_1.default, { isOpen: isMenuOpen, menuProps: getMenuProps({}, 
                    // https://github.com/downshift-js/downshift/issues/235
                    { suppressRefError: true }), inputEl: inputEl.current, suggestionsContainerProps: suggestionsContainerProps, className: classes.suggestionsContainer }, suggestions.map(function (suggestion, index) { return (react_1.default.createElement(AutocompleteSuggestionItem_1.default, __assign({ key: getChoiceValue(suggestion), createValue: createValue, suggestion: suggestion, index: index, highlightedIndex: highlightedIndex, isSelected: selectedItems
                        .map(getChoiceValue)
                        .includes(getChoiceValue(suggestion)), filterValue: filterValue, getSuggestionText: getChoiceText }, getItemProps({
                    item: suggestion,
                })))); }))));
        }),
        createElement));
};
var emptyArray = [];
var DefaultSetFilter = function () { };
exports.default = AutocompleteArrayInput;
