// 직각삼각형

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const sides = input[i]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  const [a, b, c] = sides; // a: 가장 긴 변, b, c: 나머지 변

  if (a * a === b * b + c * c) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
