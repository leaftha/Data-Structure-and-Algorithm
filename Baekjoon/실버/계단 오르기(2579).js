const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input.shift();

if (n === 1) {
  console.log(input[0]);
} else {
  let dp = Array(n + 1).fill(0);
  dp[1] = input[0];
  if (n >= 2) {
    dp[2] = input[0] + input[1];
  }

  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(
      dp[i - 2] + input[i - 1],
      dp[i - 3] + input[i - 2] + input[i - 1]
    );
  }

  console.log(dp[n]);
}
