const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

for (let T = 0; T < n; T++) {
  const n = input[T * 3];
  const line1 = input[T * 3 + 1];
  const line2 = input[T * 3 + 2];
  const dp = [[0, line1[0], line2[0]]];
  for (let i = 1; i < n; i++) {
    dp[i] = [
      Math.max(...dp[i - 1]),
      Math.max(dp[i - 1][0], dp[i - 1][2]) + line1[i],
      Math.max(dp[i - 1][0], dp[i - 1][1]) + line2[i],
    ];
  }
  console.log(Math.max(...dp[n - 1]));
}
