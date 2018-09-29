function sumEvens(numbers) {
    return numbers.filter((number) => number % 2 == 0)
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

module.exports = sumEvens;