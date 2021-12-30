"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = exports.formattedKey = void 0;
var formattedKey = function (text) {
    var type = typeof text;
    if (type !== 'string' || text.length === 0) {
        return type;
    }
    return text.toLowerCase().replace(/[^a-zA-Z ]/, '').replace(/ /g, '_');
};
exports.formattedKey = formattedKey;
var translate = function (source, t, options) {
    if (options === void 0) { options = undefined; }
    if (typeof source !== 'string') {
        return source;
    }
    var i18nKey = (0, exports.formattedKey)(source);
    var translated = t(i18nKey, source, options);
    if (typeof translated !== 'string' || translated === i18nKey) {
        return source;
    }
    return translated;
};
exports.translate = translate;
