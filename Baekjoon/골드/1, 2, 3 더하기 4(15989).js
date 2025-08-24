const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

let n = input.shift();

const max = Math.max(...input);

const dp = Array(max + 1).fill(0);
dp[0] = 1;

for (let num of [1, 2, 3]) {
  for (let i = num; i <= max; i++) {
    dp[i] += dp[i - num];
  }
}

for (let n of input) {
  console.log(dp[n]);
}
