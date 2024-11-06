const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

let arr = input.shift();
let [m] = input.shift();

const dp = Array.from(Array(n), () => Array(n).fill(false));
for (let i = 0; i < n; i++) {
  dp[i][i] = true;
}

for (let i = 0; i < n; i++) {
  if (arr[i] === arr[i + 1]) {
    dp[i][i + 1] = true;
  }
}

for (let length = 3; length <= n; length++) {
  for (let i = 0; i <= n - length; i++) {
    const j = i + length - 1;
    if (arr[i] === arr[j] && dp[i + 1][j - 1]) {
      dp[i][j] = true;
    }
  }
}
const results = [];
for (let [a, b] of input) {
  results.push(dp[a - 1][b - 1] ? 1 : 0);
}

console.log(results.join("\n"));
