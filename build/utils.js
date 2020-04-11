export var addAll = function () {
    var rgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rgs[_i] = arguments[_i];
    }
    return rgs.reduce(function (acc, x) { return acc + x; }, 0);
};
export var getDateTime = function () {
    var date = new Date();
    return {
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString()
    };
};
