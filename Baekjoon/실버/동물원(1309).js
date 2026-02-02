const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

const dp = Array.from({ length: n + 1 }, () => Array(3).fill(0));

dp[1][0] = 1;
dp[1][1] = 1;
dp[1][2] = 1;

for (let i = 2; i <= n; i++) {
  dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % 9901;

  dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % 9901;

  dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % 9901;
}

let answer = 0;

for (let i = 0; i < 3; i++) {
  answer += dp[n][i];
}

console.log(answer % 9901);
