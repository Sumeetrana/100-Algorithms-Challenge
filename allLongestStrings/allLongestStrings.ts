function allLongestStrings(strings: string[]): string[] {
  let strLength = strings[0].length;
  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > strLength) {
      strLength = strings[i].length;
    }
  }

  let longestStrings = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length === strLength) {
      longestStrings.push(strings[i]);
    }
  }

  return longestStrings;
}

console.log(allLongestStrings(["abc", "ab", "bcd", "fdg", "bv"]));
