const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));
let arr = input.join(" ").split(" ").map(Number);
let n = arr.shift();

let dp = Array(Math.max(...arr) + 1).fill([0, 0]);

dp[0] = [1, 0];
dp[1] = [0, 1];
dp[2] = [1, 1];

for (let i = 3; i < dp.length; i++) {
  dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
}

for (let i of arr) {
  console.log(dp[i][0], dp[i][1]);
}
