const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
let arr = input.shift();

let answer = 0;
let lt = 0;
let fruitCount = {};
let uniqueFruits = 0;

for (let rt = 0; rt < n; rt++) {
  if (!fruitCount[arr[rt]]) {
    fruitCount[arr[rt]] = 0;
  }
  fruitCount[arr[rt]]++;

  if (fruitCount[arr[rt]] === 1) {
    uniqueFruits++;
  }

  while (uniqueFruits > 2) {
    fruitCount[arr[lt]]--;
    if (fruitCount[arr[lt]] === 0) {
      uniqueFruits--;
    }
    lt++;
  }

  answer = Math.max(answer, rt - lt + 1);
}

console.log(answer);
