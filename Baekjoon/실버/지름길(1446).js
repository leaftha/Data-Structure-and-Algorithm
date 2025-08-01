const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const [n, d] = input.shift();

const dp = Array(d + 1).fill(Infinity);
dp[0] = 0;
for (let i = 0; i < d + 1; i++) {
  if (i + 1 <= d) {
    dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
  }
  for (let [start, end, cost] of input) {
    if (start === i) {
      dp[end] = Math.min(dp[end], dp[i] + cost);
    }
  }
}

console.log(dp[d]);
