const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
input.sort((a, b) => a[0] - b[0]);

const dp = Array(n).fill(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (input[j][1] < input[i][1]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(n - Math.max(...dp));
