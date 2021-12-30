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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var expect_1 = __importDefault(require("expect"));
var react_1 = require("@testing-library/react");
var polyglot_1 = __importDefault(require("../i18n/polyglot"));
var useTranslate_1 = __importDefault(require("./useTranslate"));
var useSetLocale_1 = __importDefault(require("./useSetLocale"));
var _1 = require(".");
var test_1 = require("../../test");
describe('useSetLocale', function () {
    var Component = function () {
        var translate = (0, useTranslate_1.default)();
        var setLocale = (0, useSetLocale_1.default)();
        return (React.createElement("div", null,
            translate('hello'),
            React.createElement("button", { onClick: function () { return setLocale('fr'); } }, "Fran\u00E7ais")));
    };
    it('should not fail when used outside of a translation provider', function () {
        var queryAllByText = (0, test_1.renderWithRedux)(React.createElement(Component, null)).queryAllByText;
        (0, expect_1.default)(queryAllByText('hello')).toHaveLength(1);
    });
    it('should use the setLocale function set in the translation context', function () { return __awaiter(void 0, void 0, void 0, function () {
        var setLocale, getByText;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLocale = jest.fn();
                    getByText = (0, test_1.renderWithRedux)(React.createElement(_1.TranslationContext.Provider, { value: {
                            i18nProvider: {
                                translate: function () { return ''; },
                                changeLocale: function () { return Promise.resolve(); },
                            },
                            locale: 'de',
                            setLocale: setLocale,
                        } },
                        React.createElement(Component, null))).getByText;
                    react_1.fireEvent.click(getByText('Français'));
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            (0, expect_1.default)(setLocale).toHaveBeenCalledTimes(1);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should use the i18n provider when using TranslationProvider', function () { return __awaiter(void 0, void 0, void 0, function () {
        var i18nProvider, _a, getByText, queryAllByText;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    i18nProvider = (0, polyglot_1.default)(function (locale) {
                        if (locale === 'en')
                            return { hello: 'hello' };
                        if (locale === 'fr')
                            return { hello: 'bonjour' };
                    });
                    _a = (0, test_1.renderWithRedux)(React.createElement(_1.TranslationProvider, { locale: "en", i18nProvider: i18nProvider },
                        React.createElement(Component, null))), getByText = _a.getByText, queryAllByText = _a.queryAllByText;
                    (0, expect_1.default)(queryAllByText('hello')).toHaveLength(1);
                    (0, expect_1.default)(queryAllByText('bonjour')).toHaveLength(0);
                    (0, react_1.act)(function () {
                        react_1.fireEvent.click(getByText('Français'));
                    });
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            (0, expect_1.default)(queryAllByText('hello')).toHaveLength(0);
                            (0, expect_1.default)(queryAllByText('bonjour')).toHaveLength(1);
                        })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
