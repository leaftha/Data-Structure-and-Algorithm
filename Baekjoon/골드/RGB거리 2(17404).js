const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
input.unshift([]);
let answer = Infinity;
for (let i = 0; i < 3; i++) {
  const dp = Array.from({ length: n + 1 }, () => Array(3).fill(Infinity));
  dp[1][i] = input[1][i];

  for (let j = 2; j <= n; j++) {
    dp[j][0] = input[j][0] + Math.min(dp[j - 1][1], dp[j - 1][2]);
    dp[j][1] = input[j][1] + Math.min(dp[j - 1][0], dp[j - 1][2]);
    dp[j][2] = input[j][2] + Math.min(dp[j - 1][0], dp[j - 1][1]);
  }

  for (let j = 0; j < 3; j++) {
    if (j === i) continue;
    answer = Math.min(answer, dp[n][j]);
  }
}

console.log(answer);
