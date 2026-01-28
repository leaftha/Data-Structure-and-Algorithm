const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, k] = input.shift();
const coins = [];
for (let [i] of input) {
  coins.push(i);
}

const dp = Array(k + 1).fill(Infinity);
dp[0] = 0;
for (let coin of coins) {
  for (let i = coin; i <= k; i++) {
    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
  }
}

console.log(dp[k] === Infinity ? -1 : dp[k]);
