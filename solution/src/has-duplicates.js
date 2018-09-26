function hasDuplicates(numbers) {
    for (i = 1; i < numbers.length; i++) {
        numbers[i] += numbers[i - 1];
    }
    if (numbers[numbers.length - 1] == numbers.length * (numbers.length + 1) / 2) {
        return false;
    }
    return true;
}

module.exports = hasDuplicates;