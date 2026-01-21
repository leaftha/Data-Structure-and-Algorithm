const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
let idx = 1;

const dp = Array.from({ length: 31 }, () => Array(31).fill(0));

for (let i = 0; i <= 30; i++) {
  dp[0][i] = 1;
  dp[i][i] = 1;
}

for (let n = 1; n <= 30; n++) {
  for (let m = n + 1; m <= 30; m++) {
    dp[n][m] = dp[n][m - 1] + dp[n - 1][m - 1];
  }
}

let answer = [];
for (let t = 0; t < T; t++) {
  const [N, M] = input[idx++].split(" ").map(Number);
  answer.push(dp[N][M]);
}

console.log(answer.join("\n"));
