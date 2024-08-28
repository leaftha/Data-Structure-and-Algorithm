const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));

input.shift();
let arr = input.join(" ").split(" ").map(Number);

let dp = Array(Math.max(...arr) + 1).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < dp.length; i++) {
  let sum = 0;
  for (let j = i; j >= i - 3; j--) {
    sum += dp[j];
  }
  dp[i] = sum;
}

for (let n of arr) {
  console.log(dp[n]);
}
