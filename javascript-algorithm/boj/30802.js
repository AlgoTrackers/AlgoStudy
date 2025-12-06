// 웰컴 키트
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0].trim()); // 참가자 수
const [S, M, L, XL, XXL, XXXL] = input[1].trim().split(" ").map(Number); // 티셔츠 신청한사람
const [T, P] = input[2].trim().split(" ").map(Number); // T : 티셔츠 최소 몇묶음, P : 펜을 P자루씩 최대 몇묶음 주문가능한지

const tshirtSizes = [S, M, L, XL, XXL, XXXL];
let totalTshirtBundles = 0;
tshirtSizes.map((sizeCount) => {
  if (sizeCount / T >= 1) {
    if (sizeCount % T === 0) {
      totalTshirtBundles += sizeCount / T;
    } else {
      totalTshirtBundles += Math.floor(sizeCount / T) + 1;
    }
  } else {
    if (sizeCount > 0) {
      totalTshirtBundles += 1;
    }
  }
});

console.log(totalTshirtBundles);
console.log(Math.floor(N / P) + " " + (N % P));
