// 평균

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const scores = input[1].trim().split(" ").map(Number);

const M = Math.max(...scores);

const newScores = scores.map((score) => (score / M) * 100);
const newScoresSum = newScores.reduce((acc, curr) => acc + curr, 0);
const avg = newScoresSum / N;

console.log(avg);
