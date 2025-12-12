// 부녀회장이 될테야

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const T = +input[0];
let idx = 1;

for (let t = 0; t < T; t++) {
  const k = +input[idx++];
  const n = +input[idx++];

  // 0층 1씩 커짐
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  for (let floor = 1; floor <= k; floor++) {
    for (let i = 1; i < n; i++) {
      arr[i] += arr[i - 1];
    }
  }

  console.log(arr[n - 1]);
}
