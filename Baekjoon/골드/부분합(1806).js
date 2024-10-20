const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));
// .map((line) => line.trim());

const [n, s] = input.shift();
let nums = input.shift();
let lt = 0;
let rt = 0;
let sum = nums[0];
let answer = Infinity;
while (rt < nums.length) {
  if (sum >= s) {
    answer = Math.min(answer, rt - lt + 1);
    sum -= nums[lt];
    lt++;
  } else {
    rt++;
    sum += nums[rt];
  }
}
console.log(answer !== Infinity ? answer : 0);
