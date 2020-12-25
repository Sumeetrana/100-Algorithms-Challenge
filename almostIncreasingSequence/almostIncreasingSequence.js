function almostIncreasingSequence(sequence) {
    var count = 0;
    for (var i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] > sequence[i + 1]) {
            count++;
        }
    }
    if (count > 1) {
        return false;
    }
    return true;
}
console.log(almostIncreasingSequence([1, 3, 5, 4]));
