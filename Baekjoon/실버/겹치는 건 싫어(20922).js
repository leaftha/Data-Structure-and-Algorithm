const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, k] = input.shift();
let nums = input.shift();
let lt = 0;
let count = {};
let answer = 0;
for (let rt = 0; rt < n; rt++) {
  let num = nums[rt];
  count[num] = (count[num] || 0) + 1;

  while (count[num] > k) {
    count[nums[lt]]--;
    lt++;
  }
  answer = Math.max(answer, rt - lt + 1);
}

console.log(answer);
