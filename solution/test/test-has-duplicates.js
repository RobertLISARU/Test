const hasDuplicates = require('../src/has-duplicates');
const assert = require('assert');

it("test when no duplicates", () => {
    numbers = [1, 2, 3, 4, 5, 6, 7];
    assert(hasDuplicates(numbers) == false);
});

it("test when duplicates", () => {
    numbers = [1, 2, 3, 4, 5, 6, 6];
    assert(hasDuplicates(numbers) == true);
});