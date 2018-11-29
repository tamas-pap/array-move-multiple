const normalizeToIndex = (toIndex, array, moveIndexes) =>
  Math.min(Math.max(0, toIndex), array.length - moveIndexes.length);

const arrayMoveByIndex = (array, indexes, toIndex, withValues) => {
  const normalizedToIndex = normalizeToIndex(toIndex, array, indexes);

  const moveValues = withValues || indexes.map(moveIndex => array[moveIndex]);
  const dontMoveValues = array.filter(
    (item, index) => indexes.indexOf(index) === -1,
  );

  dontMoveValues.splice(normalizedToIndex, 0, ...moveValues);
  return dontMoveValues;
};

const arrayMoveByValue = (
  array,
  values,
  toIndex,
  { compareBy = value => value, useValues = false } = {},
) => {
  const moveIndexes = values.map(moveValue =>
    array.findIndex(value => compareBy(value) === compareBy(moveValue)),
  );

  return arrayMoveByIndex(array, moveIndexes, toIndex, useValues && values);
};

exports.arrayMoveByIndex = arrayMoveByIndex;
exports.arrayMoveByValue = arrayMoveByValue;
