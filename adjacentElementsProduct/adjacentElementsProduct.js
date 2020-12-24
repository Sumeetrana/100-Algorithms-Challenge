function adjacentElementsProduct(numbers) {
    var result = numbers[0] * numbers[1];
    for (var i = 1; i < numbers.length - 1; i++) {
        var product = numbers[i] * numbers[i + 1];
        if (product > result) {
            result = product;
        }
    }
    return result;
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 4]));
