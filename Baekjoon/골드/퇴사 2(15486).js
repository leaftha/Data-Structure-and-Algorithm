const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
// .map((el) => String(el.trim(" ")));

let [n] = input.shift();

const dp = Array(n + 1).fill(0);
let max = 0;

for (let i = 0; i < n; i++) {
  max = Math.max(max, dp[i]);
  if (i + input[i][0] <= n) {
    dp[i + input[i][0]] = Math.max(dp[i + input[i][0]], max + input[i][1]);
  }
}
console.log(Math.max(...dp));
