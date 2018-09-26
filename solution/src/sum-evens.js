function sumEvens(numbers) {
    if (!Array.isArray(numbers)) {
        return undefined;
    }
    sum = 0;
    for (i = 0; i < numbers.length; i++) {
        if (!Number.isInteger(numbers[i])) {
            return undefined;
        }
        sum += numbers[i] % 2 === 0 ? numbers[i] : 0;
    }
    return sum;
}

module.exports = sumEvens;