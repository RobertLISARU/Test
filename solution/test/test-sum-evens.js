const sumEvens = require('../src/sum-evens');
const assert = require('assert');

it("sum evens", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    assert.equal(sumEvens(numbers), 12);
});

it("sum evens when no evens", () => {
    const numbers = [1, 3, 5, 1001];
    assert.equal(sumEvens(numbers), 0);
});

it("sum evens when negative numbers", () => {
    const numbers = [-10, -12, -11, -10, -9];
    assert.equal(sumEvens(numbers), -32);
});
