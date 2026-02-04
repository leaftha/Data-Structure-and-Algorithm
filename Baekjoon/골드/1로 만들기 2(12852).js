const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

const dp = Array(n + 1).fill(Infinity);
const prev = Array(n + 1).fill(0);

dp[1] = 0;

for (let i = 2; i <= n; i++) {
  if (dp[i] > dp[i - 1] + 1) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i]);
    prev[i] = i - 1;
  }
  if (i % 3 === 0 && dp[i] > dp[i / 3] + 1) {
    dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
    prev[i] = i / 3;
  }
  if (i % 2 === 0 && dp[i] > dp[i / 2] + 1) {
    dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
    prev[i] = i / 2;
  }
}

const path = [];

let cur = n;
while (cur !== 0) {
  path.push(cur);
  cur = prev[cur];
}

console.log(dp[n]);
console.log(path.join(" "));
