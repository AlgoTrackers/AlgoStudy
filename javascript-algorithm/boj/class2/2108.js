// 통계학
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const N = Number(input[0]);
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

const sortedArr = [...arr].sort((a, b) => a - b);

const avg = (arr) => {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  return Math.round(sum / arr.length);
};

const median = (arr) => {
  const mid = Math.floor(arr.length / 2);
  return arr[mid];
};

const mode = (arr) => {
  const freq = new Map();

  for (const n of arr) {
    freq.set(n, (freq.get(n) || 0) + 1);
  }

  let max = 0;
  let result = [];

  for (const [num, count] of freq) {
    if (count > max) {
      max = count;
      result = [num];
    } else if (count === max) {
      result.push(num);
    }
  }

  result.sort((a, b) => a - b);
  return result.length > 1 ? result[1] : result[0];
};

const range = (arr) => arr[arr.length - 1] - arr[0];

console.log(avg(sortedArr));
console.log(median(sortedArr));
console.log(mode(sortedArr));
console.log(range(sortedArr));
