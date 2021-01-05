function arrayChange(inputArray) {
    var count = 0;
    for (var i = 1; i < inputArray.length; i++) {
        if (inputArray[i] <= inputArray[i - 1]) {
            var target = inputArray[i - 1] + 1;
            var difference = target - inputArray[i];
            count += difference;
            inputArray[i] = target;
        }
    }
    return count;
}
console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([3, 1, 1]));
console.log(arrayChange([1, 2, 1]));
