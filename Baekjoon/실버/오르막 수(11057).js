const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

const dp = Array.from({ length: n + 1 }, () => Array(11).fill(0));

for (let i = 1; i <= 10; i++) {
  dp[0][i] = 1;
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 10; j++) {
    dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 10007;
  }
}

console.log(dp[n][10] % 10007);
