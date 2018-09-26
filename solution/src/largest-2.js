function largest2(numbers) {
    largest = [Number.MIN_VALUE, Number.MIN_VALUE];
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest[0]) {
            largest[1] = largest[0];
            largest[0] = numbers[i];
        }
    }
    return largest;
}

module.exports = largest2;