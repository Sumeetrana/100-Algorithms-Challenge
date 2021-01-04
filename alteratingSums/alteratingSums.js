function alteratingSums(numbers) {
    var result = [0, 0];
    numbers.forEach(function (number, i) {
        if (i % 2 == 0) {
            result[0] += number;
        }
        else {
            result[1] += number;
        }
    });
    return result;
}
console.log(alteratingSums([50, 60, 70, 80, 45]));
