"use strict";
exports.__esModule = true;
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (k, v) {
        this.key = k;
        this.val = v;
    };
    KeyValuePair.prototype.display = function () {
        console.log("key = ".concat(this.key, ", value = ").concat(this.val));
    };
    return KeyValuePair;
}());
exports["default"] = KeyValuePair;
var kvp = new KeyValuePair();
kvp.setKeyValue(1, "Steve");
kvp.display();
// key = 1, value = Steve
var test = new KeyValuePair();
test.setKeyValue('Ivan', 15);
test.display();
// key = Ivan, value = 15
