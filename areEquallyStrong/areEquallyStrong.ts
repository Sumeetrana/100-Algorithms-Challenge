function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  const yourStrongest = yourLeft <= yourRight ? yourRight : yourLeft;
  const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
  const friendsStrongest =
    friendsLeft <= friendsRight ? friendsRight : friendsLeft;
  const friendsWeekest =
    friendsLeft >= friendsRight ? friendsRight : friendsLeft;

  return yourStrongest === friendsStrongest && yourWeakest === friendsWeekest;
}

console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
