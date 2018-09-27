function largest2(numbers) {
    let max = Number.MIN_VALUE;
    let max2 = Number.MIN_VALUE;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max2 = max;
            max = numbers[i];
        } else if (numbers[i] > max2) {
            max2 = numbers[i];
        }
    }
    return [max, max2];
}

module.exports = largest2;