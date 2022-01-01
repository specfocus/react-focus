"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const segments = [
    'compulsive',
    'collector',
    'ordered_once',
    'regular',
    'returns',
    'reviewer',
];
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
exports.default = segments.map(segment => ({
    id: segment,
    name: capitalizeFirstLetter(segment),
}));
