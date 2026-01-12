// 색종이 만들기
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const paper = input.slice(1).map((line) => line.split(" ").map(Number));

let whiteCount = 0;
let blueCount = 0;
function countColors(x, y, size) {
  const firstColor = paper[x][y];
  let isSameColor = true;

  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (paper[i][j] !== firstColor) {
        isSameColor = false;
        break;
      }
    }
    if (!isSameColor) break;
  }

  if (isSameColor) {
    if (firstColor === 0) whiteCount++;
    else blueCount++;
  } else {
    const newSize = size / 2;
    countColors(x, y, newSize);
    countColors(x, y + newSize, newSize);
    countColors(x + newSize, y, newSize);
    countColors(x + newSize, y + newSize, newSize);
  }
}

countColors(0, 0, N);
console.log(whiteCount);
console.log(blueCount);
