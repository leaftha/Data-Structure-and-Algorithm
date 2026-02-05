const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();

const dp = Array(n + 1).fill(0);

for (let [k, t] of input) {
  for (let i = n; i >= t; i--) {
    dp[i] = Math.max(dp[i], dp[i - t] + k);
  }
}

console.log(Math.max(...dp));
