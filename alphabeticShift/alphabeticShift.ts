function alphabeticShift(inputString: string): string {
  const alphabet = [
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
  let newInputStringArray = inputString.split("");
  let result = [];
  for (let i = 0; i < newInputStringArray.length; i++) {
    let index = 0;
    if (newInputStringArray[i] !== "z") {
      index = alphabet.indexOf(newInputStringArray[i]) + 1;
    }
    result.push(alphabet[index]);
  }
  return result.join("");
}

console.log(alphabeticShift("crazy"));
