const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

if (n === 1) {
  console.log(input[0][0]);
  process.exit();
}
let dp = Array(n).fill(0);
dp[0] = input[0][0];

dp[1] = input[1][0] + input[0][0];

if (n > 2) {
  dp[2] = Math.max(dp[1], input[0][0] + input[2][0], input[1][0] + input[2][0]);
}
for (let i = 3; i < n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    input[i][0] + dp[i - 2],
    input[i][0] + input[i - 1][0] + dp[i - 3]
  );
}

console.log(dp[n - 1]);
