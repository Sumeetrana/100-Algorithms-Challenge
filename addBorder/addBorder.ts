function addBorder(pictures: string[]): string[] {
  let lengthOfWall = pictures[0].length + 2;
  let wall = "";
  for (let i = 0; i < lengthOfWall; i++) {
    wall += "*";
  }

  for (let i = 0; i < pictures.length; i++) {
    pictures[i] = "*".concat(pictures[i], "*");
  }

  pictures.unshift(wall);
  pictures.push(wall);
  return pictures;
}

console.log(addBorder(["abc", "def"]));
