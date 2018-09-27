function largest2(numbers) {
    let max = Math.max(...numbers);
    let max2 = Math.max(...numbers.filter((x)=>x!=max));
    return [max, max2];
}

module.exports = largest2;