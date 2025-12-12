// ISBN

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const isbn = input.split("");

// 별기호 위치 구하깅
let starIndex = isbn.indexOf("*");
let sum = 0;

const check = Number(isbn[12]);

for (let i = 0; i < 12; i++) {
  if (i === starIndex) continue;

  const digit = Number(isbn[i]);
  // 가중치 짝수면 1, 홀수면 3
  const weight = i % 2 === 0 ? 1 : 3;

  sum += digit * weight;
}

const starWeight = starIndex % 2 === 0 ? 1 : 3;

for (let x = 0; x <= 9; x++) {
  if ((sum + x * starWeight + check) % 10 === 0) {
    console.log(x);
    break;
  }
}
