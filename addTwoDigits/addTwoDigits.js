function addTwoDigits(number) {
    var n = number.toString();
    var numString = n.split("");
    var numInt = numString.map(function (num) {
        return parseInt(num);
    });
    var total = numInt.reduce(function (prev, current) {
        return prev + current;
    });
    return total;
}
console.log(addTwoDigits(29));
