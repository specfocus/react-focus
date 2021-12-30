"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var TranslationContext_1 = require("./TranslationContext");
var loading_1 = require("../loading");
var sideEffect_1 = require("../sideEffect");
/**
 * Set the current locale using the TranslationContext
 *
 * This hook re-renders when the locale changes.
 *
 * @example
 *
 * import { useSetLocale } from '../app';
 *
 * const availableLanguages = {
 *     en: 'English',
 *     fr: 'Français',
 * }
 * const LanguageSwitcher = () => {
 *     const setLocale = useSetLocale();
 *     return (
 *         <ul>{
 *             Object.keys(availableLanguages).map(locale => {
 *                  <li key={locale} onClick={() => setLocale(locale)}>
 *                      {availableLanguages[locale]}
 *                  </li>
 *              })
 *         }</ul>
 *     );
 * }
 */
var useSetLocale = function () {
    var _a = (0, react_1.useContext)(TranslationContext_1.TranslationContext), setLocale = _a.setLocale, i18nProvider = _a.i18nProvider;
    var _b = (0, loading_1.useUpdateLoading)(), startLoading = _b.startLoading, stopLoading = _b.stopLoading;
    var notify = (0, sideEffect_1.useNotify)();
    return (0, react_1.useCallback)(function (newLocale) {
        return new Promise(function (resolve) {
            startLoading();
            // so we systematically return a Promise for the messages
            // i18nProvider may return a Promise for language changes,
            resolve(i18nProvider.changeLocale(newLocale));
        })
            .then(function () {
            stopLoading();
            setLocale(newLocale);
        })
            .catch(function (error) {
            stopLoading();
            notify('ra.notification.i18n_error', 'warning');
            console.error(error);
        });
    }, [i18nProvider, notify, setLocale, startLoading, stopLoading]);
};
exports.default = useSetLocale;
