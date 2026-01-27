const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
const dp = Array.from({ length: n + 1 }, () => Array(10).fill(0));
const MOD = 1000000000;

for (let i = 1; i < 10; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= n; i++) {
  for (let j = 0; j < 10; j++) {
    if (j == 0) {
      dp[i][j] = dp[i - 1][1] % MOD;
    } else if (j === 9) {
      dp[i][j] = dp[i - 1][8] % MOD;
    } else {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
    }
  }
}

let answer = 0;

for (let i = 0; i < dp[n].length; i++) {
  answer = (answer + dp[n][i]) % MOD;
}

console.log(answer);
