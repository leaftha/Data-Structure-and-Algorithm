const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

const dp = Array.from({ length: n }, () => Array(n).fill(0n));

dp[0][0] = 1n;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dp[i][j] === 0) continue;
    let move = input[i][j];
    if (move === 0) continue;
    if (i + move < n) {
      dp[i + move][j] += dp[i][j];
    }
    if (j + move < n) {
      dp[i][j + move] += dp[i][j];
    }
  }
}

console.log(String(dp[n - 1][n - 1]));
