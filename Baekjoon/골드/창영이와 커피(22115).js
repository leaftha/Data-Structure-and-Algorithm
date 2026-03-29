const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();
let coffee = input[0];
const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(Infinity));
dp[0][0] = 0;

for (let i = 0; i <= n; i++) {
  dp[i][0] = 0;
}

for (let i = 1; i <= n; i++) {
  let c = coffee[i - 1];

  for (let j = 0; j <= m; j++) {
    if (j < c) {
      dp[i][j] = dp[i - 1][j];
    } else {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - c] + 1);
    }
  }
}
console.log(dp[n][m] === Infinity ? -1 : dp[n][m]);
