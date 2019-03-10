(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var normalizeIndexes = function normalizeIndexes(indexes, array) {
    return indexes.filter(function (index) {
      return index >= 0 && index < array.length;
    });
  };

  var normalizeToIndex = function normalizeToIndex(toIndex, array, moveIndexes) {
    return Math.min(Math.max(0, toIndex), array.length - moveIndexes.length);
  };

  var arrayMoveByIndex = function arrayMoveByIndex(array, index, toIndex, withValues) {
    var indexes = Array.isArray(index) ? index : [index];
    var normalizedIndexes = normalizeIndexes(indexes, array);
    var normalizedToIndex = normalizeToIndex(toIndex, array, indexes);
    var moveValues = withValues || normalizedIndexes.map(function (moveIndex) {
      return array[moveIndex];
    });
    var dontMoveValues = array.filter(function (item, index) {
      return normalizedIndexes.indexOf(index) === -1;
    });
    dontMoveValues.splice.apply(dontMoveValues, [normalizedToIndex, 0].concat(_toConsumableArray(moveValues)));
    return dontMoveValues;
  };

  var arrayMoveByValue = function arrayMoveByValue(array, value, toIndex) {
    var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref$compareBy = _ref.compareBy,
        compareBy = _ref$compareBy === void 0 ? function (value) {
      return value;
    } : _ref$compareBy,
        _ref$useValues = _ref.useValues,
        useValues = _ref$useValues === void 0 ? false : _ref$useValues;

    var values = Array.isArray(value) ? value : [value];
    var moveIndexes = values.map(function (moveValue) {
      return array.findIndex(function (value) {
        return compareBy(value) === compareBy(moveValue);
      });
    });
    return arrayMoveByIndex(array, moveIndexes, toIndex, useValues && values);
  };

  exports.arrayMoveByIndex = arrayMoveByIndex;
  exports.arrayMoveByValue = arrayMoveByValue;

})));
