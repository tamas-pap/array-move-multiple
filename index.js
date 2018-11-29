const normalizeToIndex = (toIndex, array, moveIndexes) =>
  Math.min(Math.max(0, toIndex), array.length - moveIndexes.length);

const arrayMoveByIndex = (array, moveIndexes, toIndex) => {
  const normalizedToIndex = normalizeToIndex(toIndex, array, moveIndexes);

  const moveValues = moveIndexes.map(moveIndex => array[moveIndex]);
  const dontMoveValues = array.filter(
    (item, index) => moveIndexes.indexOf(index) === -1,
  );

  dontMoveValues.splice(normalizedToIndex, 0, ...moveValues);
  return dontMoveValues;
};

const arrayMoveByValue = (
  array,
  moveValues,
  toIndex,
  compareBy = value => value,
) => {
  const moveIndexes = moveValues.map(moveValue =>
    array.findIndex(value => compareBy(value) === compareBy(moveValue)),
  );

  return arrayMoveByIndex(array, moveIndexes, toIndex);
};

exports.arrayMoveByIndex = arrayMoveByIndex;
exports.arrayMoveByValue = arrayMoveByValue;
