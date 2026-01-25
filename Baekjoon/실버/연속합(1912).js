const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [N] = input.shift();

const dp = Array(N).fill(0);
const [arr] = input;
dp[0] = arr[0];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(arr[i], arr[i] + dp[i - 1]);
}

console.log(Math.max(...dp));
