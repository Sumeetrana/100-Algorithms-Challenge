function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0;
  for (let i = 0; i < sequence.length - 1; i++) {
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
