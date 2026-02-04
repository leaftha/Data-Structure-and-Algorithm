const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

let n = input.shift();

const dp = Array(Math.max(...input) + 1).fill(0);
dp[1] = 1 % 1000000009;
dp[2] = 2 % 1000000009;
dp[3] = 4 % 1000000009;

for (let i = 4; i <= Math.max(...input); i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009;
}
const answer = [];
for (let i of input) {
  answer.push(dp[i]);
}

console.log(answer.join("\n"));
