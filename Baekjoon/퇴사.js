const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const N = Number(input[0]);
const dp = Array(N + 1).fill(0);
const arr = [];

for (let i = 1; i <= N; i++) {
  const [t, p] = input[i].split(" ").map(Number);
  arr.push([t, p]);
}

for (let i = 0; i < N; i++) {
  const [t, p] = arr[i];

  dp[i + 1] = Math.max(dp[i + 1], dp[i]);

  if (i + t <= N) {
    dp[i + t] = Math.max(dp[i + t], dp[i] + p);
  }
}

console.log(Math.max(...dp));
