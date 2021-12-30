"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertCountryCodeToFlag = void 0;
// ISO 3166-1 alpha-2
// ⚠️ No support for IE11
var convertCountryCodeToFlag = function (isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
        ? isoCode
            .toUpperCase()
            .replace(/./g, function (char) { return String.fromCodePoint(char.charCodeAt(0) + 127397); })
        : isoCode;
};
exports.convertCountryCodeToFlag = convertCountryCodeToFlag;
