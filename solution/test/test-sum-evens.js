const sumEvens = require('../src/sum-evens');
const assert = require('assert');

it("sum evens", () => {
    numbers = [1, 2, 3, 4, 5, 6];
    assert.equal(sumEvens(numbers), 12);
});

it("sum evens when no evens", () => {
    numbers = [1, 3, 5, 1001];
    assert.equal(sumEvens(numbers), 0);
});

it("sum evens when negative numbers", () => {
    numbers = [-10, -12, -11, -10, -9];
    assert.equal(sumEvens(numbers), -32);
});

it("sum evens when non array", () => {
    assert.equal(sumEvens("not an array"), undefined);
});

it("sum evens when non integer values", () => {
    nonIntegers = [10, "definitely not an integer", 2, 3, 3.3];
    assert.equal(sumEvens(nonIntegers), undefined);
});