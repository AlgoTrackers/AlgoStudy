const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const value = input[i].trim();

  if (value === "0") break;

  const inputStr = value.toString();
  const reversedStr = inputStr.split("").reverse().join("");

  if (inputStr === reversedStr) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
