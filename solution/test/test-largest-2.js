const largest2 = require('../src/largest-2');
const assert = require('assert');

it("largest 2", () => {
    const numbers = [1, 2, 3, 100, 4, 5, 6, 200];
    let largest = largest2(numbers);
    assert.equal(largest[0], 200);
    assert.equal(largest[1], 100);
});

it("largest 2 extra scenario", () => {
   const numbers = [1, 2, 5, 4, 3];
   let largest = largest2(numbers);
   assert.equal(largest[0], 5);
   assert.equal(largest[1], 4);
});

it("largest 2 when negative numbers", () => {
    const numbers = [-1, -2, 0, 4, 3];
    let largest = largest2(numbers);
    assert.equal(largest[0], 4);
    assert.equal(largest[1], 3);
});
