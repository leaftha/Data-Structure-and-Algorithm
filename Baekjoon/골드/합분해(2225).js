const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, k] = input.shift();

const dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));

for (let i = 1; i <= k; i++) {
  dp[i][0] = 1;
}

for (let i = 1; i <= k; i++) {
  for (let j = 1; j <= n; j++) {
    dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000000;
  }
}

console.log(dp[k][n]);
