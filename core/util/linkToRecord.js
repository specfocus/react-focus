"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (basePath, id, linkType) {
    if (linkType === void 0) { linkType = 'edit'; }
    var link = "".concat(basePath, "/").concat(encodeURIComponent(id));
    if (linkType === 'show') {
        return "".concat(link, "/show");
    }
    return link;
});
