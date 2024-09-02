const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));

let n = Number(input.shift());
let answer = 0;
let dp = Array(n).fill(0);
dp[0] = 1;
dp[1] = 2;

for (let i = 2; i < dp.length; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
}

answer = dp[n - 1];

console.log(answer % 10007);
