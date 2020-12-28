function alphabeticShift(inputString) {
    var alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    var newInputStringArray = inputString.split("");
    var result = [];
    for (var i = 0; i < newInputStringArray.length; i++) {
        var index = 0;
        if (newInputStringArray[i] !== "z") {
            index = alphabet.indexOf(newInputStringArray[i]) + 1;
        }
        result.push(alphabet[index]);
    }
    return result.join("");
}
console.log(alphabeticShift("crazy"));
