const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));

let arr = [...input[1]];
let dp = Array(arr.length + 1).fill(0);

dp[1] = arr[0];
for (let i = 2; i < dp.length; i++) {
  dp[i] = dp[i - 1] + arr[i - 1];
}

for (let i = 2; i < input.length; i++) {
  let [s, e] = input[i];
  console.log(dp[e] - dp[s - 1]);
}
