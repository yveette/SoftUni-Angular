"use strict";
exports.__esModule = true;
var Box = /** @class */ (function () {
    function Box() {
        this._boxes = [];
    }
    Box.prototype.add = function (el) {
        this._boxes.unshift(el);
    };
    Box.prototype.remove = function () {
        this._boxes.shift();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this._boxes.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
exports["default"] = Box;
var boxOne = new Box();
boxOne.add(1);
boxOne.add(2);
boxOne.add(3);
console.log(boxOne.count); // 3
var boxTwo = new Box();
boxTwo.add("Pesho");
boxTwo.add("Gosho");
console.log(boxTwo.count); // 2
boxTwo.remove();
console.log(boxTwo.count); // 1
