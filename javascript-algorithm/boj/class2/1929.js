// 소수 구하기 - 에라토스테네스의 체

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ");

const [M, N] = input.map(Number);

// 소수 배열 생성 N크기만큼
const isPrime = Array(N + 1).fill(true);

// 0,1 은 소수가 아니므로 배열에 false 를 삽입함
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i * i <= N; i++) {
  // 만약 소수 발견하면 걔 이후의 배수 요소들을 다 false 로 바꾼다.
  // 그렇게 남아있는 소수들만 남아 배열에 true 로 생존하게됨
  if (isPrime[i]) {
    for (let j = i * i; j <= N; j += i) {
      isPrime[j] = false;
    }
  }
}

const result = [];
for (let i = M; i <= N; i++) {
  if (isPrime[i]) {
    result.push(i);
  }
}

console.log(result.join("\n"));
