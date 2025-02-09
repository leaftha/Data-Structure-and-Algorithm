const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
// .map((el) => el.trim());

let [n, m] = input.shift();
const dp = Array(m + 1).fill(0);

for (let [K, S] of input) {
  for (let j = m; j >= K; j--) {
    dp[j] = Math.max(dp[j], dp[j - K] + S);
  }
}

console.log(dp[m]);
