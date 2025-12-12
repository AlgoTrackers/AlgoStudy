// 분해합

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = input[0].trim();

// 1부터 N까지 반복
for (let i = 1; i <= N; i++) {
  // 각 자리수의 합을 구해서 i에 더함 i가 N과 같으면 출력후 종료
  const sum =
    i +
    String(i)
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);
  if (sum === Number(N)) {
    console.log(i);
    return;
  }
}
