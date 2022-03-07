"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Melolemonmelon = exports.Airmelon = exports.Earthmelon = exports.Firemelon = exports.Watermelon = void 0;
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.elementIndex = weight * melonSort.length;
        this.element = '';
    }
    Melon.prototype.getElementIndex = function () {
        return this.elementIndex;
    };
    Melon.prototype.toString = function () {
        var result = "Element: ".concat(this.element, "\nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
        return result;
    };
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = 'Water';
        return _this;
    }
    return Watermelon;
}(Melon));
exports.Watermelon = Watermelon;
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = 'Fire';
        return _this;
    }
    return Firemelon;
}(Melon));
exports.Firemelon = Firemelon;
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = 'Earth';
        return _this;
    }
    return Earthmelon;
}(Melon));
exports.Earthmelon = Earthmelon;
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = 'Air';
        return _this;
    }
    return Airmelon;
}(Melon));
exports.Airmelon = Airmelon;
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elements = ['Fire', 'Earth', 'Air', 'Water'];
        _this.element = 'Water';
        _this.elementCount = 0;
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        this.element = this.elements[this.elementCount];
        this.elementCount++;
        if (this.elementCount >= this.element.length) {
            this.elementCount = 0;
        }
    };
    return Melolemonmelon;
}(Watermelon));
exports.Melolemonmelon = Melolemonmelon;
// let test: Melon = new Melon(100, "Test");
//Throws error
var watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
// Element: Water
// Sort: Kingsize
// Element Index: 100
var firemelon = new Firemelon(18, "Big Fire");
console.log(firemelon.toString());
// Element: Fire
// Sort: Big Fire
// Element Index: 144
var earthmelon = new Earthmelon(25, "Medium");
console.log(earthmelon.toString());
// Element: Earth
// Sort: Medium
// Element Index: 150
var airmelon = new Airmelon(5, "Minimal");
console.log(airmelon.toString());
// Element: Air
// Sort: Minimal
// Element Index: 35
var melolemonmelon = new Melolemonmelon(5, "Minimal");
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
