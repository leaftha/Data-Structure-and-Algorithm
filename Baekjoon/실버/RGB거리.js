const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
let answer = 0;
let dp = Array.from(Array(input.length), () => Array(input[0].length).fill(0));
dp[0] = input[0];
for (let i = 1; i < input.length; i++) {
  for (let j = 0; j < input[0].length; j++) {
    if (j === 0) {
      dp[i][j] = Math.min(dp[i - 1][1], dp[i - 1][2]) + input[i][j];
    }
    if (j === 1) {
      dp[i][j] = Math.min(dp[i - 1][0], dp[i - 1][2]) + input[i][j];
    }
    if (j === 2) {
      dp[i][j] = Math.min(dp[i - 1][0], dp[i - 1][1]) + input[i][j];
    }
  }
}
answer = Math.min(...dp[n - 1]);
console.log(answer);
