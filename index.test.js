/* global describe, test, expect */

const { arrayMoveByIndex, arrayMoveByValue } = require('./index');

const numbers = [0, 1, 2, 3, 4, 5];

describe('Move items by index', () => {
  test('moving to the beginning of the array', () => {
    expect(arrayMoveByIndex(numbers, [1, 2], 0)).toEqual([1, 2, 0, 3, 4, 5]);
    expect(arrayMoveByIndex(numbers, [1, 5], 0)).toEqual([1, 5, 0, 2, 3, 4]);
    expect(arrayMoveByIndex(numbers, [3, 5], 0)).toEqual([3, 5, 0, 1, 2, 4]);
  });

  test('moving to the end of the array', () => {
    expect(arrayMoveByIndex(numbers, [1, 2], 5)).toEqual([0, 3, 4, 5, 1, 2]);
    expect(arrayMoveByIndex(numbers, [1, 5], 5)).toEqual([0, 2, 3, 4, 1, 5]);
    expect(arrayMoveByIndex(numbers, [3, 5], 5)).toEqual([0, 1, 2, 4, 3, 5]);
  });

  test('moving to the middle of the array', () => {
    expect(arrayMoveByIndex(numbers, [1, 2], 2)).toEqual([0, 3, 1, 2, 4, 5]);
    expect(arrayMoveByIndex(numbers, [1, 5], 2)).toEqual([0, 2, 1, 5, 3, 4]);
    expect(arrayMoveByIndex(numbers, [3, 5], 2)).toEqual([0, 1, 3, 5, 2, 4]);
  });
});

const todo1 = { id: 1, isCompleted: true, name: 'Todo 1' };
const todo2 = { id: 2, isCompleted: true, name: 'Todo 2' };
const todo3 = { id: 3, isCompleted: false, name: 'Todo 3' };
const todo4 = { id: 4, isCompleted: false, name: 'Todo 4' };
const todo5 = { id: 5, isCompleted: false, name: 'Todo 5' };

const todos = [todo1, todo2, todo3, todo4, todo5];

describe('Move items by value', () => {
  test('with default comparator', () => {
    expect(arrayMoveByValue(todos, [todo1, todo5], 2)).toEqual([
      todo2,
      todo3,
      todo1,
      todo5,
      todo4,
    ]);
  });

  test('with a custom comparator', () => {
    const comparateBy = value => value.id;

    expect(
      arrayMoveByValue(todos, [{ id: 1 }, { id: 5 }], 2, comparateBy),
    ).toEqual([todo2, todo3, todo1, todo5, todo4]);
  });
});
