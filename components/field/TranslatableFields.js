"use strict";
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
exports.TranslatableFields = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var core_1 = require("../../core");
var TranslatableFieldsTabs_1 = require("./TranslatableFieldsTabs");
var TranslatableFieldsTabContent_1 = require("./TranslatableFieldsTabContent");
var PREFIX = 'RaTranslatableFields';
var classes = {
    root: "".concat(PREFIX, "-root"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = {
            flexGrow: 1,
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(0.5),
        },
        _b);
});
/**
 * Provides a way to show multiple languages for any field passed as children.
 * It expects the translatable values to have the following structure:
 * {
 *     name: {
 *         en: 'The english value',
 *         fr: 'The french value',
 *         tlh: 'The klingon value',
 *     },
 *     description: {
 *         en: 'The english value',
 *         fr: 'The french value',
 *         tlh: 'The klingon value',
 *     }
 * }
 *
 * @example <caption>Basic usage</caption>
 * <TranslatableFields locales={['en', 'fr']}>
 *     <TextField source={getSource('title')} />
 *     <TextField source={getSource('description')} />
 * </TranslatableFields>
 *
 * @example <caption>With a custom language selector</caption>
 * <TranslatableFields
 *     selector={<MyLanguageSelector />}
 *     locales={['en', 'fr']}
 * >
 *     <TextField source={getSource('title')} />
 * <TranslatableFields>
>
 *
 * const MyLanguageSelector = () => {
 *     const {
 *         locales,
 *         selectedLocale,
 *         selectLocale,
 *     } = useTranslatableContext();
 *
 *     return (
 *         <select onChange={selectLocale}>
 *             {locales.map((locale) => (
 *                 <option selected={locale.locale === selectedLocale}>
 *                     {locale.name}
 *                 </option>
 *             ))}
 *        </select>
 *     );
 * }
 *
 * * @param props The component props
 * * @param {string} props.defaultLocale The locale selected by default. Default to 'en'.
 * * @param {string[]} props.locales An array of the possible locales in the form. For example [{ 'en', 'fr' }].
 * * @param {ReactElement} props.selector The element responsible for selecting a locale. Defaults to Material UI tabs.
 */
var TranslatableFields = function (props) {
    var defaultLocale = props.defaultLocale, locales = props.locales, _a = props.groupKey, groupKey = _a === void 0 ? '' : _a, _b = props.selector, selector = _b === void 0 ? React.createElement(TranslatableFieldsTabs_1.TranslatableFieldsTabs, { groupKey: groupKey }) : _b, children = props.children, resource = props.resource, basePath = props.basePath;
    var record = (0, core_1.useRecordContext)(props);
    var context = (0, core_1.useTranslatable)({ defaultLocale: defaultLocale, locales: locales });
    return (React.createElement(Root, { className: classes.root },
        React.createElement(core_1.TranslatableContextProvider, { value: context },
            selector,
            locales.map(function (locale) { return (React.createElement(TranslatableFieldsTabContent_1.TranslatableFieldsTabContent, { key: locale, basePath: basePath, locale: locale, record: record, resource: resource, groupKey: groupKey }, children)); }))));
};
exports.TranslatableFields = TranslatableFields;
