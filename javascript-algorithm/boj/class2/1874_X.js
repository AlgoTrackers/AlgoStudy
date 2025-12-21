// 스택 수열

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

const n = input[0]; // 전체 개수
const sequence = input.slice(1); // 만들고 싶은 수열

const stack = [];
const result = [];

let cur = 1; // 다음에 push할 숫자
let idx = 0; // sequence 인덱스

while (idx < n) {
  const target = sequence[idx];

  // 아직 target을 만들기 위해 push가 필요하다면
  if (cur <= target) {
    stack.push(cur);
    result.push("+");
    cur++;
  }
  // 스택 top이 target이면 pop
  else if (stack[stack.length - 1] === target) {
    stack.pop();
    result.push("-");
    idx++;
  }
  // 둘 다 안 되면 불가능
  else {
    console.log("NO");
    return;
  }
}

console.log(result.join("\n"));
