function addMultipleNumbers(...inputs: number[]): number {
  let total: number = 0;
  inputs.forEach((number) => {
    total += number;
  });
  return total;
}

console.log(addMultipleNumbers(1, 2, 3, 4, 5));
