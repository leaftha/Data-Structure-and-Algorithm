const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let [n] = input.shift();

const arr = input.shift();

let dp = Array(n).fill(0);
let dp1 = Array(n).fill(0);

dp[0] = arr[0];
let answer = dp[0];
for (let i = 1; i < arr.length; i++) {
  dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
  dp1[i] = Math.max(dp1[i - 1] + arr[i], dp[i - 1]);

  answer = Math.max(answer, dp[i], dp1[i]);
}

console.log(answer);
