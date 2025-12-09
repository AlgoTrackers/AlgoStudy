// FizzBuzz
// isNaN 숫자변환 가능하면 false, 불가능하면 true

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// 입력
const str1 = input[0];
const str2 = input[1];
const str3 = input[2];

// 피즈버즈 계산 함수
function fizzbuzz(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return String(n);
}

// 문자열과 숫자 비교 함수
function match(str, n) {
  if (!isNaN(str)) return Number(str) === n; // 숫자는 직접 비교
  return fizzbuzz(n) === str;
}

let candidates = [];

if (!isNaN(str1)) candidates.push(Number(str1));
if (!isNaN(str2)) candidates.push(Number(str2) - 1);
if (!isNaN(str3)) candidates.push(Number(str3) - 2);

// 숫자가 존재할때
if (candidates.length > 0) {
  for (const i of candidates) {
    if (match(str1, i) && match(str2, i + 1) && match(str3, i + 2)) {
      console.log(fizzbuzz(i + 3));
    }
  }
}

// 숫자가 하나도 없을때
for (let base = 1; base <= 100; base++) {
  for (let i = base; i <= base + 200; i += 15) {
    if (match(str1, i) && match(str2, i + 1) && match(str3, i + 2)) {
      console.log(fizzbuzz(i + 3));
    }
  }
}
