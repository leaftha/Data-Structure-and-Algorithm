const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const [N, K] = input[0].trim().split(" ").map(Number);
const dp = Array(K + 1).fill(0);

for (let i = 1; i <= N; i++) {
  const [W, V] = input[i].trim().split(" ").map(Number);
  for (let j = K; j >= W; j--) {
    if (dp[j - W] + V > dp[j]) {
      dp[j] = dp[j - W] + V;
    }
  }
}

console.log(dp[K]);
