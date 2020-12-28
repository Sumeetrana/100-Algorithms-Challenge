function alphabeticSubSequence(inputString) {
    var isSS = true;
    for (var i = 0; i < inputString.length - 1; i++) {
        if (inputString.charCodeAt(i) >= inputString.charCodeAt(i + 1)) {
            isSS = false;
            break;
        }
    }
    return isSS;
}
console.log(alphabeticSubSequence("acf"));
