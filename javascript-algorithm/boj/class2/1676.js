const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const N = Number(input);

// 5의 개수찾기
let count = 0;
for (let i = 5; i <= N; i *= 5) {
  count += Math.floor(N / i);
}
console.log(count);
