const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

let dp = Array.from({ length: n }, () => Array(n).fill(0));

dp[0][0] = input[0][0];

for (let i = 1; i < n; i++) {
  for (let j = 0; j < input[i].length; j++) {
    let prev = j - 1;
    let next = j;
    let max = -Infinity;
    if (prev >= 0 && next < input[i - 1].length) {
      max = Math.max(dp[i - 1][prev], dp[i - 1][next]);
    } else if (prev < 0) {
      max = dp[i - 1][next];
    } else {
      max = dp[i - 1][prev];
    }

    dp[i][j] = max + input[i][j];
  }
}

console.log(Math.max(...dp[n - 1]));
