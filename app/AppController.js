"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var recoil_1 = require("recoil");
var useAzureAuthentication_1 = __importDefault(require("../azure/useAzureAuthentication"));
var AppStack_1 = require("./AppStack");
var AppUser_1 = require("./AppUser");
var AppController = function () {
    var _a = (0, recoil_1.useRecoilState)(AppUser_1.appUser), user = _a[0], setUser = _a[1];
    var appFrameStack = (0, AppStack_1.useAppStack)();
    var logout = (0, useAzureAuthentication_1.default)({ setUser: setUser, style: 'redirect', user: user }).logout;
    (0, react_1.useEffect)(function () {
        appFrameStack.push('authc', {
            handle: function (action) {
                if (action !== 'SIGN_OUT') {
                    return action;
                }
                logout();
                setUser(null);
                return null;
            }
        });
        return function () { appFrameStack.pop('authc'); };
    }, []);
    return null;
};
exports.default = AppController;
