const hasDuplicates = require('../src/has-duplicates');
const assert = require('assert');

it("test when no duplicates", () => {
    const numbers = [3, 2, 1, 4, 7, 6, 5];
    assert(!hasDuplicates(numbers));
});

it("test when duplicates", () => {
    const numbers = [6, 2, 5, 4, 3, 6, 1];
    assert(hasDuplicates(numbers));
});

it("test duplicates in single number array", () => {
    const numbers = [1];
    assert(!hasDuplicates(numbers));
});

it("test duplicates - extra scenario", () => {
    const numbers = [1, 1, 4, 4];
    assert(hasDuplicates(numbers));
});

it("test duplicates - when n is the duplicate element", () => {
    const numbers = [1, 2, 4, 4];
    assert(hasDuplicates(numbers));
});