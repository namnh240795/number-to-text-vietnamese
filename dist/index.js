"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getText = undefined;

var _isNumber = require("lodash/isNumber");

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám, chín"];
var base_ten = ["mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
var base_hundred = ["một trăm", "hai trăm", "ba trăm", "bốn trăm", "năm trăm", "sáu trăm", "bảy trăm", "tám trăm", "chín trăm"];

var getTen = function getTen(number) {
  var array = ("" + number).split();
  var first = parseInt(array[0]);
  var second = parseInt(array[1]);
  if (second === 0) {
    return base_ten[first - 1];
  }
  if (second === 5) {
    return base_ten[first - 1] + " + l\u0103m";
  }
  if (second === 1) {
    if (first === 1) {
      return base_ten[first - 1] + " + m\u1ED9t";
    }
    return base_ten[first - 1] + " + m\u1ED1t";
  }
  return base_ten[first - 1] + " + " + base[second];
};

var getHundred = function getHundred() {};

var getText = exports.getText = function getText(number) {
  try {
    if (!(0, _isNumber2.default)(number)) {
      throw "Input is not a number";
    }
    if (number.length === 1) {
      return base[number];
    }
    if (number.length === 2) {
      return getTen(number);
    }
  } catch (error) {
    console.log('error', error);
  }
};