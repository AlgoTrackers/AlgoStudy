// 카드2

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const N = Number(input);

const cards = [];
for (let i = 1; i <= N; i++) {
  cards.push(i);
}

// js에서 deQue처럼 사용하기 위해 front변수 사용
// 실제로 배열에서 값을 제거하는게 아니라 포인터를 뒤로이동하면서 포인터 기준 뒤의 배열만 확인하는거
let front = 0;

while (cards.length - front > 1) {
  front++; // 맨위 카드 버리기
  cards.push(cards[front++]); // 다음 카드 맨 아래로 이동
}

console.log(cards[front]);
