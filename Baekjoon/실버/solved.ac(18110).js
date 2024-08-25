const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));

let n = input.shift().join("");
let nums = input.join(" ").split(" ").map(Number);
nums.sort((a, b) => a - b);
let count = Math.round(n * 0.15);

let sum = 0;
for (let i = count; i < nums.length - count; i++) {
  sum += nums[i];
}

console.log(Math.round(sum / (nums.length - count * 2)));
