"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
var ToDoTypes;
(function (ToDoTypes) {
    ToDoTypes["SIMPLE"] = "simple";
    ToDoTypes["COMPLEX"] = "complex";
})(ToDoTypes || (ToDoTypes = {}));
console.log(">>", ToDoTypes.SIMPLE);
setTimeout(function () {
    var x = ToDoTypes.COMPLEX;
    console.log(">>", x, utils_1.addAll(1, 2, 3));
}, 1000);
//# sourceMappingURL=index.js.map