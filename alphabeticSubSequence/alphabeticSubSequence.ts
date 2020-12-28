function alphabeticSubSequence(inputString: string): boolean {
  let isSS = true;
  for (let i = 0; i < inputString.length - 1; i++) {
    if (inputString.charCodeAt(i) >= inputString.charCodeAt(i + 1)) {
      isSS = false;
      break;
    }
  }
  return isSS;
}

console.log(alphabeticSubSequence("acf"));
