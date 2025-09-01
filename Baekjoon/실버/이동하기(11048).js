const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();

const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

dp[1][1] = input[0][0];

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (i === 0 && j === 0) continue;
    dp[i][j] = Math.max(
      input[i - 1][j - 1] + dp[i - 1][j],
      input[i - 1][j - 1] + dp[i - 1][j - 1],
      input[i - 1][j - 1] + dp[i][j - 1]
    );
  }
}

console.log(dp[n][m]);
