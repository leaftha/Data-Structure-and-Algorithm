const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input[0];
const dp = Array(n + 1).fill(Infinity);
dp[0] = 0;
dp[1] = 1;

for (let i = 2; i <= n; i++) {
  for (let j = 1; j * j < i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}

console.log(dp[n]);
