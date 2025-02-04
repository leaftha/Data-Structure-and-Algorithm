const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let [n] = input[0];
let idx = 1;

for (let i = 0; i < n; i++) {
  let [num] = input[idx];
  let money = input[idx + 1];
  let [goal] = input[idx + 2];

  const dp = Array(goal + 1).fill(0);
  dp[0] = 1;

  for (let coin of money) {
    for (let j = coin; j <= goal; j++) {
      dp[j] += dp[j - coin];
    }
  }

  console.log(dp[goal]);
  idx += 3;
}
