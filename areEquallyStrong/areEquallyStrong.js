function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    var yourStrongest = yourLeft <= yourRight ? yourRight : yourLeft;
    var yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    var friendsStrongest = friendsLeft <= friendsRight ? friendsRight : friendsLeft;
    var friendsWeekest = friendsLeft >= friendsRight ? friendsRight : friendsLeft;
    return yourStrongest === friendsStrongest && yourWeakest === friendsWeekest;
}
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
