"use strict";
exports.__esModule = true;
exports.addAll = function () {
    var rgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rgs[_i] = arguments[_i];
    }
    return rgs.reduce(function (acc, x) { return acc + x; }, 0);
};
//# sourceMappingURL=utils.js.map