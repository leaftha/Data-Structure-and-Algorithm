const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input[0];
let arr = input[1];

const dp = Array(n).fill(0);
dp[0] = arr[0];

for (let i = 1; i < n; i++) {
  let sum = 0;
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[j], dp[i]);
    }
  }

  dp[i] += arr[i];
}

console.log(Math.max(...dp));
