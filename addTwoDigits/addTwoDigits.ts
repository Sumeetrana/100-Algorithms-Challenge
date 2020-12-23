function addTwoDigits(number: number): any {
  let n = number.toString();
  let numString = n.split("");
  let numInt = numString.map((num) => {
    return parseInt(num);
  });
  let total = numInt.reduce((prev, current) => {
    return prev + current;
  });
  return total;
}

console.log(addTwoDigits(29));
