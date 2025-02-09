const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
// .map((el) => el.trim());

const [C, N] = input.shift();

const dp = Array(C + 101).fill(Infinity);
dp[0] = 0;

for (let [cost, customers] of input) {
  for (let j = customers; j <= C + 100; j++) {
    dp[j] = Math.min(dp[j], dp[j - customers] + cost);
  }
}

console.log(Math.min(...dp.slice(C)));
