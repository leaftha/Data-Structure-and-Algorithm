const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));
let n = input[0].shift();

let dp = Array(n + 1).fill(0);

dp[2] = 1;
dp[3] = 1;

for (let i = 4; i < dp.length; i++) {
  let a = Infinity;
  let b = Infinity;
  let c = Infinity;
  if (i % 3 === 0) {
    a = dp[i / 3] + 1;
  }
  if (i % 2 === 0) {
    b = dp[i / 2] + 1;
  }
  c = dp[i - 1] + 1;
  dp[i] = Math.min(a, b, c);
}

console.log(dp[n]);
