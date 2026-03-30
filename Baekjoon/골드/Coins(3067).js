const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

let idx = 0;

for (let _ = 0; _ < n; _++) {
  let [m] = input[idx];
  let coin = input[idx + 1];
  let [t] = input[idx + 2];

  const dp = Array(t + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= m; i++) {
    let c = coin[i - 1];

    for (let j = c; j <= t; j++) {
      dp[j] += dp[j - c];
    }
  }
  console.log(dp[t]);
  idx += 3;
}
