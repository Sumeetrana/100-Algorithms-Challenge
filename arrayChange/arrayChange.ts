function arrayChange(inputArray: number[]): number {
  let count = 0;
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      let target = inputArray[i - 1] + 1;
      let difference = target - inputArray[i];
      count += difference;
      inputArray[i] = target;
    }
  }
  return count;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([3, 1, 1]));
console.log(arrayChange([1, 2, 1]));
