"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserValue = exports.useUserState = exports.useSetUserState = exports.atomUser = void 0;
const recoil_1 = require("recoil");
exports.atomUser = (0, recoil_1.atom)({
    key: 'atomUser',
    default: {}, // default value (aka initial value)
});
const useSetUserState = () => (0, recoil_1.useSetRecoilState)(exports.atomUser);
exports.useSetUserState = useSetUserState;
const useUserState = () => (0, recoil_1.useRecoilState)(exports.atomUser);
exports.useUserState = useUserState;
const useUserValue = () => (0, recoil_1.useRecoilValue)(exports.atomUser);
exports.useUserValue = useUserValue;
