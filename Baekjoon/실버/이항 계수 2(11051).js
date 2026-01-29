const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const [N, K] = input;
const MOD = 10007;

const dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let n = 0; n <= N; n++) {
  dp[n][0] = 1;
  dp[n][n] = 1;
  for (let k = 1; k < n; k++) {
    dp[n][k] = (dp[n - 1][k - 1] + dp[n - 1][k]) % MOD;
  }
}

console.log(dp[N][K]);
