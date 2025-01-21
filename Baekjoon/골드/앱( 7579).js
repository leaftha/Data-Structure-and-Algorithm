const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let [n, m] = input[0];
const memory = input[1];
const cost = input[2];

const max = 100 * n;
const dp = Array(max + 1).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = max; j >= cost[i]; j--) {
    dp[j] = Math.max(dp[j], dp[j - cost[i]] + memory[i]);
  }
}

let answer = Infinity;
for (let j = 0; j <= max; j++) {
  if (dp[j] >= m) {
    answer = Math.min(answer, j);
  }
}

console.log(answer);
