const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

let n = input.shift();

const dp = Array.from({ length: n }).fill(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (input[j] < input[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}

const lis = Math.max(...dp);
console.log(n - lis);
