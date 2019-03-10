const normalizeIndexes = (indexes, array) =>
  indexes.filter(index => index >= 0 && index < array.length);

const normalizeToIndex = (toIndex, array, moveIndexes) =>
  Math.min(Math.max(0, toIndex), array.length - moveIndexes.length);

const arrayMoveByIndex = (array, index, toIndex, withValues) => {
  const indexes = Array.isArray(index) ? index : [index];
  const normalizedIndexes = normalizeIndexes(indexes, array);
  const normalizedToIndex = normalizeToIndex(toIndex, array, indexes);

  const moveValues =
    withValues || normalizedIndexes.map(moveIndex => array[moveIndex]);

  const dontMoveValues = array.filter(
    (item, index) => normalizedIndexes.indexOf(index) === -1,
  );

  dontMoveValues.splice(normalizedToIndex, 0, ...moveValues);
  return dontMoveValues;
};

const arrayMoveByValue = (
  array,
  value,
  toIndex,
  { compareBy = value => value, useValues = false } = {},
) => {
  const values = Array.isArray(value) ? value : [value];
  const moveIndexes = values.map(moveValue =>
    array.findIndex(value => compareBy(value) === compareBy(moveValue)),
  );

  return arrayMoveByIndex(array, moveIndexes, toIndex, useValues && values);
};

exports.arrayMoveByIndex = arrayMoveByIndex;
exports.arrayMoveByValue = arrayMoveByValue;
