const largest2 = require('../src/largest-2');
const assert = require('assert');

it("largest 2", () => {
    numbers = [1, 2, 3, 100, 4, 5, 6, 200];
    largest = largest2(numbers);
    assert.equal(largest[0], 200);
    assert.equal(largest[1], 100);
});

//I'll skip the input validation tests for now