// 소수 찾기

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

let count = 0;

const isPrime = (n) => {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

for (let i = 0; i < N; i++) {
  if (isPrime(arr[i])) {
    count += 1;
  }
}

console.log(count);
