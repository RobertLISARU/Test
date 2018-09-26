const hasDuplicates = require('../src/has-duplicates');
const assert = require('assert');

it("test when no duplicates", () => {
    numbers = [3, 2, 1, 4, 7, 6, 5];
    assert(hasDuplicates(numbers) == false);
});

it("test when duplicates", () => {
    numbers = [6, 2, 5, 4, 3, 6, 1];
    assert(hasDuplicates(numbers) == true);
});

it("test duplicates in single number array", () => {
    numbers = [42];
    assert(hasDuplicates(numbers) == false);
});

//I'll skip then input validation tests for now