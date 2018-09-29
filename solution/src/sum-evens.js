function sumEvens(numbers) {
    return numbers.filter((number) => number % 2 == 0)
        .reduce((previousSum, currentValue) => previousSum + currentValue, 0);
}

module.exports = sumEvens;