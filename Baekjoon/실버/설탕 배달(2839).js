const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));

let n = input[0].shift();
let answer = 0;
while (n > 0) {
  if (n % 5 === 0) {
    n -= 5;
  } else {
    n -= 3;
  }
  answer++;
}

console.log(n === 0 ? answer : -1);

const dp = Array(n + 1).fill(Infinity);
dp[0] = 0;

for (let i = 3; i <= n; i++) {
  if (i >= 3) dp[i] = Math.min(dp[i], dp[i - 3] + 1);
  if (i >= 5) dp[i] = Math.min(dp[i], dp[i - 5] + 1);
}

console.log(dp[n] === Infinity ? -1 : dp[n]);
