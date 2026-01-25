const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
const dp = Array(101).fill(0);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i < 102; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

const answer = [];

for ([num] of input) {
  answer.push(dp[num]);
}

console.log(answer.join("\n"));
