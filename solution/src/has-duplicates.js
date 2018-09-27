function hasDuplicates(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[Math.abs(numbers[i])] < 0) {
            return true;
        }
        numbers[Math.abs(numbers[i])] *= -1;
    }
    return false;
}

module.exports = hasDuplicates;