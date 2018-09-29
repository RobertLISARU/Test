function hasDuplicates(numbers) {
    for  (let i = 0; i < numbers.length; i++) {
        let currentValue = Math.abs(numbers[i]);
        if (numbers[currentValue] < 0) {
            return true;
        }
        numbers[currentValue] *= -1;
    }
    return false;
}

module.exports = hasDuplicates;