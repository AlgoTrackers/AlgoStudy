// Hashing
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const L = Number(input[0]);
const str = input[1].trim();

// BigInt를 사용하여 큰 수 계산
const r = 31n;
const M = 1234567891n;

let result = 0n;

for (let i = 0; i < L; i++) {
  const charCode = BigInt(str.charCodeAt(i) - 96);
  result = (result + charCode * r ** BigInt(i)) % M;
}

console.log(result.toString());
