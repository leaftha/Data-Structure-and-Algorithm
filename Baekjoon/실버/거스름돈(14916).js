const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

const dp = Array(n + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= n; i++) {
  if (i - 2 >= 0) dp[i] = Math.min(dp[i], dp[i - 2] + 1);
  if (i - 5 >= 0) dp[i] = Math.min(dp[i], dp[i - 5] + 1);
}

console.log(dp[n]);
