// 균형잡힌 세상

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const result = [];

const openBracket = ["(", "["];
const closeBracket = [")", "]"];

let i = 0;
while (true) {
  const line = input[i];
  const openBracketArr = [];
  const closeBracketArr = [];

  // 입력받은 줄의 각 문자에 대해서 반복문 돌면서 검사
  for (let char of line) {
    // 만약 열린 괄호면 openBracketArr에 추가
    // 닫힌 괄호면 closeBracketArr에 추가 후 짝이 맞는지 검사
    if (openBracket.includes(char)) {
      openBracketArr.push(char);
    } else if (closeBracket.includes(char)) {
      closeBracketArr.push(char);
      // 짝이 맞는지 검사
      const lastOpen = openBracketArr[openBracketArr.length - 1];
      if (
        (char === ")" && lastOpen === "(") ||
        (char === "]" && lastOpen === "[")
      ) {
        // 짝이 맞으면 배열에서 제거
        openBracketArr.pop();
        closeBracketArr.pop();
      } else {
        break;
      }
    }
  }

  // 모든 문자를 검사한 후에도 openBracketArr와 closeBracketArr가 비어있으면 균형잡힌 것
  if (openBracketArr.length === 0 && closeBracketArr.length === 0) {
    result.push("yes");
  } else {
    result.push("no");
  }

  if (line === ".") break;
  i++;
}
console.log(result.slice(0, -1).join("\n"));
