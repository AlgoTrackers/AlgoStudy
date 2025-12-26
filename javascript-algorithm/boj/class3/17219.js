// 비밀번호 찾기

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const passwordMap = new Map();

for (let i = 1; i <= N; i++) {
  const [site, pw] = input[i].split(" ");
  passwordMap.set(site, pw);
}

let result = [];

for (let i = N + 1; i <= N + M; i++) {
  result.push(passwordMap.get(input[i]));
}

console.log(result.join("\n"));
