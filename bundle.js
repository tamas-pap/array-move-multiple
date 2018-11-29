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

  var normalizeToIndex = function normalizeToIndex(toIndex, array, moveIndexes) {
    return Math.min(Math.max(0, toIndex), array.length - moveIndexes.length);
  };

  var arrayMoveByIndex = function arrayMoveByIndex(array, moveIndexes, toIndex) {
    var normalizedToIndex = normalizeToIndex(toIndex, array, moveIndexes);
    var moveValues = moveIndexes.map(function (moveIndex) {
      return array[moveIndex];
    });
    var dontMoveValues = array.filter(function (item, index) {
      return moveIndexes.indexOf(index) === -1;
    });
    dontMoveValues.splice.apply(dontMoveValues, [normalizedToIndex, 0].concat(_toConsumableArray(moveValues)));
    return dontMoveValues;
  };

  var arrayMoveByValue = function arrayMoveByValue(array, moveValues, toIndex) {
    var compareBy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (value) {
      return value;
    };
    var moveIndexes = moveValues.map(function (moveValue) {
      return array.findIndex(function (value) {
        return compareBy(value) === compareBy(moveValue);
      });
    });
    return arrayMoveByIndex(array, moveIndexes, toIndex);
  };

  exports.arrayMoveByIndex = arrayMoveByIndex;
  exports.arrayMoveByValue = arrayMoveByValue;

})));
