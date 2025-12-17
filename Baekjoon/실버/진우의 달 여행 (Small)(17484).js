const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();

const dp = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => [Infinity, Infinity, Infinity])
);

for (let j = 0; j < m; j++) {
  dp[0][j][0] = input[0][j];
  dp[0][j][1] = input[0][j];
  dp[0][j][2] = input[0][j];
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (j + 1 < m) {
      dp[i][j][0] =
        Math.min(dp[i - 1][j + 1][1], dp[i - 1][j + 1][2]) + input[i][j];
    }
    dp[i][j][1] = Math.min(dp[i - 1][j][0], dp[i - 1][j][2]) + input[i][j];
    if (j - 1 >= 0) {
      dp[i][j][2] =
        Math.min(dp[i - 1][j - 1][0], dp[i - 1][j - 1][1]) + input[i][j];
    }
  }
}
let answer = Infinity;

for (let i = 0; i < m; i++) {
  for (let j = 0; j < 3; j++) {
    answer = Math.min(answer, dp[n - 1][i][j]);
  }
}
console.log(answer);
