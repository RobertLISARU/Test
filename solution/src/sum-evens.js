function sumEvens(numbers) {
    if (!Array.isArray(numbers)) {
        return undefined;
    }
    return numbers.filter((x) => x % 2 == 0).reduce((x, y) => x + y, 0);
}

module.exports = sumEvens;