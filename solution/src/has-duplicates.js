function hasDuplicates(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let currentValue = Math.abs(numbers[i]);
        if (numbers[currentValue - 1] < 0) {
            return true;
        }
        numbers[currentValue - 1] *= -1;
    }
    return false;
}

module.exports = hasDuplicates;