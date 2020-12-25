function allLongestStrings(strings) {
    var strLength = strings[0].length;
    for (var i = 1; i < strings.length; i++) {
        if (strings[i].length > strLength) {
            strLength = strings[i].length;
        }
    }
    var longestStrings = [];
    for (var i = 0; i < strings.length; i++) {
        if (strings[i].length === strLength) {
            longestStrings.push(strings[i]);
        }
    }
    return longestStrings;
}
console.log(allLongestStrings(["abc", "ab", "bcd", "fdg", "bv"]));
