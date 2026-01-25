const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [N] = input.shift();

const dp = Array(1001).fill(0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i < 1001; i++) {
  dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}

console.log(dp[N]);
