const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
const dp = Array.from({ length: n + 1 }, () => [0n, 0n]);

dp[1][1] = 1n;

for (let i = 2; i <= n; i++) {
  dp[i][0] = dp[i - 1][1] + dp[i - 1][0];
  dp[i][1] = dp[i - 1][0];
}

const answer = dp[n][0] + dp[n][1];
console.log(answer.toString());
