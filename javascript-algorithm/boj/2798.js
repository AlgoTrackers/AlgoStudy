// 블랙잭

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].trim().split(" ").map(Number);
const arr = input[1].trim().split(" ").map(Number);

let answer = 0;
let sum = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      sum = arr[i] + arr[j] + arr[k];
      if (sum <= M && answer < sum) {
        answer = sum;
      }
    }
  }
}

console.log(answer);
