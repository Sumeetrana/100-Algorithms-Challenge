function addMultipleNumbers() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    var total = 0;
    inputs.forEach(function (number) {
        total += number;
    });
    return total;
}
console.log(addMultipleNumbers(1, 2, 3, 4, 5));
