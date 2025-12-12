// 좌표 정렬하기

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const N = Number(input[0]);
const points = [];

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  points.push([x, y]);
}

// 정렬 y기준 오름차순 y같다면 x기준 오름차순
points.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

const result = points.map((point) => point.join(" ")).join("\n");
console.log(result);
