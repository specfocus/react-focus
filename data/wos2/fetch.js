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
exports.fetchJson = exports.createHeadersFromOptions = void 0;
var HttpError_1 = __importDefault(require("../../core/dataProvider/HttpError"));
var token = null;
var createHeadersFromOptions = function (options) {
    var requestHeaders = (options.headers ||
        new Headers({
            Accept: 'application/json',
        }));
    if (!requestHeaders.has('Content-Type') &&
        !(options && (!options.method || options.method === 'GET')) &&
        !(options && options.body && options.body instanceof FormData)) {
        requestHeaders.set('Content-Type', 'application/json');
    }
    if (options.user && options.user.authenticated && options.user.token) {
        // requestHeaders.set('Authorization', options.user.token);
    }
    return requestHeaders;
};
exports.createHeadersFromOptions = createHeadersFromOptions;
var refreshToken = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var username, password, credentials, basicAuth, headers, formData, body, request_moment, response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (token && Date.now() - token.request_moment < token.expires_in) {
                    return [2 /*return*/, token];
                }
                username = '2lhA7TaIPPLzSAv5fIUksjMVpKYa';
                password = 'EFTVlEzsKzWHWcd_j9NZudMZ51Ia';
                credentials = Buffer.from("".concat(username, ":").concat(password)).toString('base64');
                basicAuth = 'Basic ' + credentials;
                console.log('username:password', Buffer.from(credentials, 'base64').toString());
                headers = new Headers({
                    // Accept: 'application/json',
                    Authorization: basicAuth,
                    'Access-Control-Allow-Origin': 'localhost:3000',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    // Connection: 'keep-alive'
                });
                formData = new FormData();
                formData.append('grant_type', 'password');
                formData.append('username', 'ApiUserFTTHMultiOp');
                formData.append('password', '4p1Us3rFTTTHMult10p$');
                if (token === null || token === void 0 ? void 0 : token.refresh_token) {
                    formData.append('refresh_token', token === null || token === void 0 ? void 0 : token.refresh_token);
                }
                body = {
                    grant_type: 'password',
                    username: 'ApiUserFTTHMultiOp',
                    password: '4p1Us3rFTTTHMult10p$'
                };
                if (token === null || token === void 0 ? void 0 : token.refresh_token) {
                    // Object.assign(body, { refresh_token: token?.refresh_token });
                }
                request_moment = Date.now();
                return [4 /*yield*/, fetch(url, {
                        method: 'POST',
                        // mode: 'no-cors',
                        headers: headers,
                        body: new URLSearchParams(body),
                        referrerPolicy: 'no-referrer',
                        cache: 'no-cache',
                        // credentials: 'same-origin'
                    })];
            case 1:
                response = _a.sent();
                if (!(response && response.ok)) return [3 /*break*/, 3];
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                token = __assign(__assign({}, data), { request_moment: request_moment });
                return [3 /*break*/, 4];
            case 3:
                token = null;
                _a.label = 4;
            case 4: return [2 /*return*/, token];
        }
    });
}); };
var apikey = "eyJ4NXQiOiJOVGRtWmpNNFpEazNOalkwWXpjNU1tWm1PRGd3TVRFM01XWXdOREU1TVdSbFpEZzROemM0WkE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJVRklORVQuQ09NXC9qYXJheWF1QGNhcmJvbi5zdXBlciIsImFwcGxpY2F0aW9uIjp7Im93bmVyIjoiVUZJTkVULkNPTVwvamFyYXlhdSIsInRpZXJRdW90YVR5cGUiOm51bGwsInRpZXIiOiJVbmxpbWl0ZWQiLCJuYW1lIjoiU2VydmljaW9zTXVsdGlPcEFwcCIsImlkIjoxNywidXVpZCI6ImJjM2FkMjE1LWNjZDgtNDJjMC1hMDI5LTI0ZjQwYjZkOGRkZiJ9LCJpc3MiOiJodHRwczpcL1wvcWEtd3NvMi51ZmluZXQuY29tOjQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IlVubGltaXRlZCI6eyJ0aWVyUXVvdGFUeXBlIjoicmVxdWVzdENvdW50IiwiZ3JhcGhRTE1heENvbXBsZXhpdHkiOjAsImdyYXBoUUxNYXhEZXB0aCI6MCwic3RvcE9uUXVvdGFSZWFjaCI6dHJ1ZSwic3Bpa2VBcnJlc3RMaW1pdCI6MCwic3Bpa2VBcnJlc3RVbml0IjpudWxsfX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwicGVybWl0dGVkUmVmZXJlciI6IiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IlNlcnZpY2lvc011bHRpT3BGdHRoIiwiY29udGV4dCI6IlwvbXVsdGlvcFwvdjEiLCJwdWJsaXNoZXIiOiJVRklORVQuQ09NXC9qYXJheWF1IiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9XSwicGVybWl0dGVkSVAiOiIiLCJpYXQiOjE2MzYxMjE5NTcsImp0aSI6ImYxZTUyZDQ4LWYwOTktNGNkYy1hZDU0LTI4NGZiNTE3ZGNjMSJ9.J24GvWM_GAXslQjrwqQSp6IZZ3UNYlsC41rrprX6fInBNMJDAsyCQk6zwKFJmRmD5-L8yqetvNpR_xcrFP9G2maweobOZH1TbRltx65rReUi1lxVO2LQSZvKMHj6yu2v_mLcB-hWTRgauSuGT0GpBItrtgXkVcz9b1HtQ69Xk8OrHKgfSrUqAHiZfvs66eQYtx9EteePMo618WsM0aV35e5B1cd4pa3l57gsu_ULNPcn4HIqyiUfRq_lNaHLt95ICcxRCjgNKL9rl7ElWl-GJvPx2bAF_iaM4FLOt7YR2Fjxo7vEFA8vLCDHeuiNBzIpRHRRil4HMsPz3Jv0kpARwg==";
var fetchJson = function (url, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var t, requestHeaders;
        return __generator(this, function (_a) {
            t = "Bearer ".concat(apikey);
            // console.log({ t });
            Object.assign(options, {
                mode: 'no-cors',
                user: {
                    authenticated: false,
                    // token: t//`${token?.token_type} ${token?.access_token}`
                }
            });
            requestHeaders = new Headers();
            // requestHeaders.set('Authorization', t);
            requestHeaders.set('apikey', apikey);
            console.log('HEADER =>', Array.from(requestHeaders.entries()));
            return [2 /*return*/, fetch(url, { headers: requestHeaders })
                    .then(function (response) {
                    return response.text().then(function (text) { return ({
                        status: response.status,
                        statusText: response.statusText,
                        headers: response.headers,
                        body: text,
                    }); });
                })
                    .then(function (_a) {
                    var status = _a.status, statusText = _a.statusText, headers = _a.headers, body = _a.body;
                    var json;
                    try {
                        json = JSON.parse(body);
                    }
                    catch (e) {
                        // not json, no big deal
                    }
                    if (status < 200 || status >= 300) {
                        return Promise.reject(new HttpError_1.default((json && json.message) || statusText, status, json));
                    }
                    return Promise.resolve({ status: status, headers: headers, body: body, json: json });
                })
                    .catch(console.error)];
        });
    });
};
exports.fetchJson = fetchJson;
