const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));

let [n, m] = input.shift();

let arr = [];

for (let i = 0; i < m; i++) {
  let nums = input.pop();
  arr.push(nums);
}

const dp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

for (let i = 0; i < n; i++) {
  dp[i + 1][1] = input[i][0];
}
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    dp[i][j] =
      dp[i][j - 1] + dp[i - 1][j] - dp[i - 1][j - 1] + input[i - 1][j - 1];
  }
}

arr = arr.reverse();
for (let [x1, y1, x2, y2] of arr) {
  const sum = dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];
  console.log(sum);
}
