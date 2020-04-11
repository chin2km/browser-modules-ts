import { getDateTime, addAll } from "./utils.js";
var ToDoTypes;
(function (ToDoTypes) {
    ToDoTypes["SIMPLE"] = "simple";
    ToDoTypes["COMPLEX"] = "complex";
})(ToDoTypes || (ToDoTypes = {}));
console.log(">>", ToDoTypes.SIMPLE);
console.log(">>", ToDoTypes.COMPLEX, addAll(1, 2, 3, 4, 5, 6, 7, 8));
var setDateTime = function () {
    var _a = getDateTime(), date = _a.date, time = _a.time;
    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time;
};
setDateTime();
setInterval(setDateTime, 1000);
