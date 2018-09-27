function hasDuplicates(numbers) {
    return numbers.reduce((x, y) => x + y) !== numbers.length * (numbers.length + 1) / 2;
}

module.exports = hasDuplicates;