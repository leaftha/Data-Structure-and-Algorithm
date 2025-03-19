const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

let arr = input.shift();
arr.sort((a, b) => {
  return a - b;
});

let dp = Array(n).fill(0);
dp[0] = arr[0];

for (let i = 1; i < n; i++) {
  dp[i] = dp[i - 1] + arr[i];
}

let answer = 0;
for (let num of dp) {
  answer += num;
}

console.log(answer);
