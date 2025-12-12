// 덩치

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);

const map = new Map([
  ["weight", []],
  ["height", []],
]);

for (let i = 1; i <= N; i++) {
  input[i] = input[i].split(" ").map(Number);
  map.get("weight").push(input[i][0]);
  map.get("height").push(input[i][1]);
}

const result = Array(N).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    if (
      map.get("weight")[i] < map.get("weight")[j] &&
      map.get("height")[i] < map.get("height")[j]
    ) {
      result[i]++;
    }
  }
}

console.log(result.join(" "));
