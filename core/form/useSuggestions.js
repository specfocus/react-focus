"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSuggestionsFactory = void 0;
var react_1 = require("react");
var set_1 = __importDefault(require("lodash/set"));
var useChoices_1 = __importDefault(require("./useChoices"));
var i18n_1 = require("../i18n");
/*
 * Returns helper functions for suggestions handling.
 *
 * @param allowDuplicates A boolean indicating whether a suggestion can be added several times
 * @param allowEmpty A boolean indicating whether an empty suggestion should be added
 * @param choices An array of available choices
 * @param emptyText The text to use for the empty suggestion. Defaults to an empty string
 * @param emptyValue The value to use for the empty suggestion. Defaults to `null`
 * @param limitChoicesToValue A boolean indicating whether the initial suggestions should be limited to the currently selected one(s)
 * @param matchSuggestion Optional unless `optionText` is a React element. Function which check whether a choice matches a filter. Must return a boolean.
 * @param optionText Either a string defining the property to use to get the choice text, a function or a React element
 * @param optionValue The property to use to get the choice value
 * @param selectedItem The currently selected item. May be an array of selected items
 * @param suggestionLimit The maximum number of suggestions returned, excluding the empty one if `allowEmpty` is `true`
 * @param translateChoice A boolean indicating whether to option text should be translated
 *
 * @returns An object with helper functions:
 * - getChoiceText: Returns the choice text or a React element
 * - getChoiceValue: Returns the choice value
 * - getSuggestions: A function taking a filter value (string) and returning the matching suggestions
 */
var useSuggestions = function (_a) {
    var allowCreate = _a.allowCreate, allowDuplicates = _a.allowDuplicates, allowEmpty = _a.allowEmpty, choices = _a.choices, _b = _a.createText, createText = _b === void 0 ? 'ra.action.create' : _b, _c = _a.createValue, createValue = _c === void 0 ? '@@create' : _c, _d = _a.emptyText, emptyText = _d === void 0 ? '' : _d, _e = _a.emptyValue, emptyValue = _e === void 0 ? null : _e, limitChoicesToValue = _a.limitChoicesToValue, matchSuggestion = _a.matchSuggestion, optionText = _a.optionText, optionValue = _a.optionValue, selectedItem = _a.selectedItem, _f = _a.suggestionLimit, suggestionLimit = _f === void 0 ? 0 : _f, translateChoice = _a.translateChoice;
    var translate = (0, i18n_1.useTranslate)();
    var _g = (0, useChoices_1.default)({
        optionText: optionText,
        optionValue: optionValue,
        translateChoice: translateChoice,
    }), getChoiceText = _g.getChoiceText, getChoiceValue = _g.getChoiceValue;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var getSuggestions = (0, react_1.useCallback)((0, exports.getSuggestionsFactory)({
        allowCreate: allowCreate,
        allowDuplicates: allowDuplicates,
        allowEmpty: allowEmpty,
        choices: choices,
        createText: createText,
        createValue: createValue,
        emptyText: translate(emptyText, { _: emptyText }),
        emptyValue: emptyValue,
        getChoiceText: getChoiceText,
        getChoiceValue: getChoiceValue,
        limitChoicesToValue: limitChoicesToValue,
        matchSuggestion: matchSuggestion,
        optionText: optionText,
        optionValue: optionValue,
        selectedItem: selectedItem,
        suggestionLimit: suggestionLimit,
    }), [
        allowCreate,
        allowDuplicates,
        allowEmpty,
        choices,
        createText,
        createValue,
        emptyText,
        emptyValue,
        getChoiceText,
        getChoiceValue,
        limitChoicesToValue,
        matchSuggestion,
        optionText,
        optionValue,
        selectedItem,
        suggestionLimit,
        translate,
    ]);
    return {
        getChoiceText: getChoiceText,
        getChoiceValue: getChoiceValue,
        getSuggestions: getSuggestions,
    };
};
exports.default = useSuggestions;
var escapeRegExp = function (value) {
    return value ? value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : '';
}; // $& means the whole matched string
/**
 * Default matcher implementation which check whether the suggestion text matches the filter.
 */
var defaultMatchSuggestion = function (getChoiceText) { return function (filter, suggestion, exact) {
    if (exact === void 0) { exact = false; }
    var suggestionText = getChoiceText(suggestion);
    var isReactElement = (0, react_1.isValidElement)(suggestionText);
    var regex = escapeRegExp(filter);
    return isReactElement
        ? false
        : suggestionText &&
            suggestionText.match(
            // We must escape any RegExp reserved characters to avoid errors
            // For example, the filter might contains * which must be escaped as \*
            new RegExp(exact ? "^".concat(regex, "$") : regex, 'i'));
}; };
/**
 * Get the suggestions to display after applying a fuzzy search on the available choices
 *
 * @example
 *
 * getSuggestions({
 *   choices: [{ id: 1, name: 'admin' }, { id: 2, name: 'publisher' }],
 *   optionText: 'name',
 *   optionValue: 'id',
 *   getSuggestionText: choice => choice[optionText],
 * })('pub')
 *
 * // Will return [{ id: 2, name: 'publisher' }]
 * getSuggestions({
 *   choices: [{ id: 1, name: 'admin' }, { id: 2, name: 'publisher' }],
 *   optionText: 'name',
 *   optionValue: 'id',
 *   getSuggestionText: choice => choice[optionText],
 * })('pub')
 *
 * // Will return [{ id: 2, name: 'publisher' }]
 */
var getSuggestionsFactory = function (_a) {
    var _b = _a.allowCreate, allowCreate = _b === void 0 ? false : _b, _c = _a.allowDuplicates, allowDuplicates = _c === void 0 ? false : _c, _d = _a.allowEmpty, allowEmpty = _d === void 0 ? false : _d, _e = _a.choices, choices = _e === void 0 ? [] : _e, _f = _a.createText, createText = _f === void 0 ? 'ra.action.create' : _f, _g = _a.createValue, createValue = _g === void 0 ? '@@create' : _g, _h = _a.emptyText, emptyText = _h === void 0 ? '' : _h, _j = _a.emptyValue, emptyValue = _j === void 0 ? null : _j, _k = _a.optionText, optionText = _k === void 0 ? 'name' : _k, _l = _a.optionValue, optionValue = _l === void 0 ? 'id' : _l, getChoiceText = _a.getChoiceText, getChoiceValue = _a.getChoiceValue, _m = _a.limitChoicesToValue, limitChoicesToValue = _m === void 0 ? false : _m, _o = _a.matchSuggestion, matchSuggestion = _o === void 0 ? defaultMatchSuggestion(getChoiceText) : _o, selectedItem = _a.selectedItem, _p = _a.suggestionLimit, suggestionLimit = _p === void 0 ? 0 : _p;
    return function (filter) {
        var suggestions = [];
        // if an item is selected and matches the filter
        if (selectedItem &&
            !Array.isArray(selectedItem) &&
            matchSuggestion(filter, selectedItem)) {
            if (limitChoicesToValue) {
                // display only the selected item
                suggestions = choices.filter(function (choice) {
                    return getChoiceValue(choice) === getChoiceValue(selectedItem);
                });
            }
            else if (!allowDuplicates) {
                // ignore the filter to show more choices
                suggestions = removeAlreadySelectedSuggestions(choices, selectedItem, getChoiceValue);
            }
            else {
                suggestions = choices;
            }
        }
        else {
            suggestions = choices.filter(function (choice) { return matchSuggestion(filter, choice); });
            if (!allowDuplicates) {
                suggestions = removeAlreadySelectedSuggestions(suggestions, selectedItem, getChoiceValue);
            }
        }
        suggestions = limitSuggestions(suggestions, suggestionLimit);
        var hasExactMatch = suggestions.some(function (suggestion) {
            return matchSuggestion(filter, suggestion, true);
        });
        if (allowCreate) {
            var filterIsSelectedItem = 
            // If the selectedItem is an array (for example AutocompleteArrayInput)
            // we shouldn't try to match
            !!selectedItem && !Array.isArray(selectedItem)
                ? matchSuggestion(filter, selectedItem, true)
                : false;
            if (!hasExactMatch && !filterIsSelectedItem) {
                suggestions.push(getSuggestion({
                    optionText: optionText,
                    optionValue: optionValue,
                    text: createText,
                    value: createValue,
                }));
            }
        }
        if (allowEmpty) {
            suggestions.unshift(getSuggestion({
                optionText: optionText,
                optionValue: optionValue,
                text: emptyText,
                value: emptyValue,
            }));
        }
        return suggestions;
    };
};
exports.getSuggestionsFactory = getSuggestionsFactory;
/**
 * @example
 *
 * removeAlreadySelectedSuggestions(
 *  [{ id: 1, name: 'foo'}, { id: 2, name: 'bar' }],
 *  [{ id: 1, name: 'foo'}]
 * );
 *
 * // Will return [{ id: 2, name: 'bar' }]
 *
 * @param suggestions List of suggestions
 * @param selectedItems List of selection
 * @param getChoiceValue Converter function from suggestion to value
 */
var removeAlreadySelectedSuggestions = function (suggestions, selectedItems, getChoiceValue) {
    if (!selectedItems) {
        return suggestions;
    }
    var selectedValues = Array.isArray(selectedItems)
        ? selectedItems.map(getChoiceValue)
        : [getChoiceValue(selectedItems)];
    return suggestions.filter(function (suggestion) { return !selectedValues.includes(getChoiceValue(suggestion)); });
};
/**
 * @example
 *
 * limitSuggestions(
 *  [{ id: 1, name: 'foo'}, { id: 2, name: 'bar' }],
 *  1
 * );
 *
 * // Will return [{ id: 1, name: 'foo' }]
 *
 * @param suggestions List of suggestions
 * @param limit
 */
var limitSuggestions = function (suggestions, limit) {
    if (limit === void 0) { limit = 0; }
    return Number.isInteger(limit) && limit > 0
        ? suggestions.slice(0, limit)
        : suggestions;
};
/**
 * addSuggestion(
 *  [{ id: 1, name: 'foo'}, { id: 2, name: 'bar' }],
 * );
 *
 * // Will return [{ id: null, name: '' }, { id: 1, name: 'foo' }, , { id: 2, name: 'bar' }]
 *
 * @param suggestions List of suggestions
 * @param options
 * @param options.optionText
 */
var getSuggestion = function (_a) {
    var _b = _a.optionText, optionText = _b === void 0 ? 'name' : _b, _c = _a.optionValue, optionValue = _c === void 0 ? 'id' : _c, _d = _a.text, text = _d === void 0 ? '' : _d, _e = _a.value, value = _e === void 0 ? null : _e;
    var suggestion = {};
    (0, set_1.default)(suggestion, optionValue, value);
    if (typeof optionText === 'string') {
        (0, set_1.default)(suggestion, optionText, text);
    }
    return suggestion;
};
