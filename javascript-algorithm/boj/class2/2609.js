// 최대공약수와 최소공배수
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ");

const A = Number(input[0].trim());
const B = Number(input[1].trim());

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

console.log(gcd(A, B));
console.log(lcm(A, B));
